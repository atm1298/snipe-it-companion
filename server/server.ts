// Require the framework and instantiate it
import 'dotenv/config';
import fetch from 'node-fetch';
import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';
import cors from '@fastify/cors';

const prisma = new PrismaClient();
const server = Fastify({
	logger: true,
});
server.register(cors);

// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: 'application/json',
		'content-type': 'application/json',
		Authorization: 'Bearer ' + process.env.API_KEY,
	},
};

// Hardware
server.get('/assets', async function (request, reply) {
	const searchParams = new URLSearchParams(request.query as string);
	const assets = await fetch(
		'https://snipeit.imis.uni-luebeck.de/api/v1/hardware?' +
			searchParams.toString(),
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));

	return { assets };
});

// EINE Hardware mit ID für Details
server.get<{ Params: { id: string } }>(
	'/assets/:id',
	async function (request, reply) {
		const { id } = request.params;
		const asset = await fetch(
			'https://snipeit.imis.uni-luebeck.de/api/v1/hardware/' + id,
			options
		)
			.then((response) => response.json())
			.catch((err) => console.error(err));

		return { asset };
	}
);

// Kategorien
server.get('/categories', async function (request, reply) {
	const categories = await fetch(
		'https://snipeit.imis.uni-luebeck.de/api/v1/categories?sort=name&order=asc',
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log(categories);
	return { categories };
});
// Reservierungen werden erstellt
server.post('/reservation', async (req, res) => {
	const { assetId, dateStart, dateEnd, userId } = req.body;
	const reservation = await prisma.reservation.create({
		data: {
			assetId: Number(assetId),
			dateStart,
			dateEnd,
			User: { connect: { id: userId } },
		},
	});

	return reservation;
});
// Reservierungen werden ausgegeben
server.get('/reservation', async (req, res) => {
	const reservations = await prisma.reservation.findMany({
		where: {
			userId: req.query.userId ? Number(req.query.userId) : undefined,
		},
	});
	const reservationsWithAssets = await Promise.all(
		reservations.map(async (reservation) => ({
			...reservation,
			asset: await fetch(
				'https://snipeit.imis.uni-luebeck.de/api/v1/hardware/' +
					reservation.assetId,
				options
			).then((response) => response.json()),
		}))
	);
	return reservationsWithAssets;
});

server.post('/reservation/receive', async (req, res) => {
	const { reservationId } = req.body;
	const reservation = await prisma.reservation.update({
		where: {
			id: reservationId,
		},
		data: {
			received: true,
		},
	});
	console.log(reservation);

	const asset = await fetch(
		'https://snipeit.imis.uni-luebeck.de/api/v1/hardware/' +
			reservation.assetId +
			'/checkout',
		{
			...options,
			method: 'post',
			body: JSON.stringify({
				checkout_to_type: 'user',
				status_id: 4,
				assigned_user: 14,
			}),
		}
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log(asset);
});

server.post('/reservation/return', async (req, res) => {
	const { reservationId } = req.body;
	const reservation = await prisma.reservation.update({
		where: {
			id: reservationId,
		},
		data: {
			returned: true,
		},
	});
	const asset = await fetch(
		'https://snipeit.imis.uni-luebeck.de/api/v1/hardware/' +
			reservation.assetId +
			'/checkin',
		{
			...options,
			method: 'post',
			body: JSON.stringify({
				status_id: 4,
			}),
		}
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log(asset);
});

// Run the server!
server.listen({ port: 3000 }, function (err, address) {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
});
