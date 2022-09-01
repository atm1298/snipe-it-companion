// Require the framework and instantiate it
import 'dotenv/config';
import fetch from 'node-fetch';
import Fastify from 'fastify';
import cors from '@fastify/cors';

const server = Fastify({
	logger: true,
});
server.register(cors);

// ALLE ASSETS TEST HEHE
const options = {
	method: 'GET',
	headers: {
		Accept: 'application/json',
		Authorization: 'Bearer ' + process.env.API_KEY,
	},
};

// Hardware
server.get('/assets', async function (request, reply) {
	const searchParams = new URLSearchParams(request.query);
	const assets = await fetch(
		'https://snipeit.imis.uni-luebeck.de/api/v1/hardware?' +
			searchParams.toString(),
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	//console.log(assets);
	return { assets };
});

// EINE Hardware mit ID für Details
server.get('/assets/:id', async function (request, reply) {
	const { id } = request.params;
	const asset = await fetch(
		'https://snipeit.imis.uni-luebeck.de/api/v1/hardware/' + id,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	console.log(asset);
	return { asset };
});

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

// Run the server!
server.listen({ port: 3000 }, function (err, address) {
	if (err) {
		server.log.error(err);
		process.exit(1);
	}
});
