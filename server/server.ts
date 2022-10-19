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
server.register(cors, { origin: true });
server.setErrorHandler((err, request, reply) => {
	reply.status(500).send({ ok: false });
});

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
		process.env.SNIPEIT_URL + '/api/v1/hardware?' + searchParams.toString(),
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
			process.env.SNIPEIT_URL + '/api/v1/hardware/' + id,
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
		process.env.SNIPEIT_URL + '/api/v1/categories?sort=name&order=asc',
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log(categories);
	return { categories };
});
// Reservierungen werden erstellt
server.post<{
	Body: { assetId: string; dateStart: string; dateEnd: string; userId: number };
}>('/reservation', async (req, res) => {
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
server.get<{ Querystring: { userId: string; assetId: string } }>(
	'/reservation',
	async (req, res) => {
		const reservations = await prisma.reservation.findMany({
			where: {
				userId: req.query.userId ? Number(req.query.userId) : undefined,
				assetId: req.query.assetId ? Number(req.query.assetId) : undefined,
			},
		});
		const reservationsWithAssets = await Promise.all(
			reservations.map(async (reservation) => ({
				...reservation,
				asset: await fetch(
					process.env.SNIPEIT_URL + '/api/v1/hardware/' + reservation.assetId,
					options
				).then((response) => response.json()),
			}))
		);
		return reservationsWithAssets;
	}
);

server.post<{ Body: { reservationId: number } }>(
	'/reservation/receive',
	async (req, res) => {
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
			process.env.SNIPEIT_URL +
				'/api/v1/hardware/' +
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
	}
);

server.post<{ Body: { reservationId: number } }>(
	'/reservation/return',
	async (req, res) => {
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
			process.env.SNIPEIT_URL +
				'/api/v1/hardware/' +
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

		return {
			reservation,
		};
	}
);

server.delete<{ Body: { reservationId: number } }>(
	'/reservation/delete',
	async (req, res) => {
		const { reservationId } = req.body;
		const reservation = await prisma.reservation.delete({
			where: {
				id: reservationId,
			},
		});

		return {
			reservation,
		};
	}
);

server.patch<{
	Body: { reservationId: number; dateStart: string; dateEnd: string };
}>('/reservation/patch', async (req, res) => {
	const { reservationId, dateStart, dateEnd } = req.body;
	const reservation = await prisma.reservation.update({
		where: {
			id: reservationId,
		},
		data: {
			dateStart,
			dateEnd,
		},
	});

	return {
		reservation,
	};
});

// Run the server!
server.listen({ port: 3333, host: '0.0.0.0' }, function (err, address) {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
});
