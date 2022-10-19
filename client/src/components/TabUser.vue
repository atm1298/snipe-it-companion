<script setup lang="ts">
import { startOfToday } from "date-fns";
import { computed, ref } from "vue";

import AssetStatus from "./AssetStatus.vue";

const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const reservations = ref();
fetch(import.meta.env.VITE_SERVER_URL + "/reservation?userId=1", options)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		reservations.value = data.map(reservation => ({
			...reservation,
			asset: {
				...reservation.asset,
				name: reservation.asset.name.split(/&[gl]t;/g)[0],
			},
		}));
	});

const upcomingReservations = computed(
	() =>
		reservations.value?.filter(
			reservation =>
				new Date(reservation.dateStart) > startOfToday() && !reservation.received
		) ?? []
);
const upcomingReturns = computed(
	() =>
		reservations.value?.filter(
			reservation =>
				new Date(reservation.dateEnd) > startOfToday() &&
				reservation.received &&
				!reservation.returned
		) ?? []
);

const pastReservations = computed(
	() =>
		reservations.value?.filter(
			reservation =>
				new Date(reservation.dateEnd) < startOfToday() &&
				reservation.received &&
				reservation.returned
		) ?? []
);

function deleteReservation(id: number) {
	fetch(import.meta.env.VITE_SERVER_URL + "/reservation/delete", {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "DELETE",
		body: JSON.stringify({
			reservationId: id,
		}),
	})
		.then(res => res.json())
		.then(data => console.log(data));
}

function editReservation(id: number) {
	fetch(import.meta.env.VITE_SERVER_URL + "/reservation/" + { id }, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({
			reservationId: id,
		}),
	})
		.then(res => res.json())
		.then(data => console.log(data));
}
</script>

<template>
	<div class="flex flex-col">
		<nav
			class="relative z-0 flex overflow-hidden rounded-md border"
			aria-label="Tabs"
			role="tablist"
		>
			<button
				type="button"
				class="active relative min-w-0 flex-1 overflow-hidden border-l border-b-2 bg-white p-4 text-center text-sm font-medium text-gray-500 text-gray-600 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 hs-tab-active:border-b-orange-600 hs-tab-active:font-semibold hs-tab-active:text-gray-900"
				id="bar-with-underline-item-1"
				data-hs-tab="#bar-with-underline-1"
				aria-controls="bar-with-underline-1"
				role="tab"
			>
				Kommende
			</button>
			<button
				type="button"
				class="relative min-w-0 flex-1 overflow-hidden border-l border-b-2 bg-white p-4 text-center text-sm font-medium text-gray-500 text-gray-600 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 hs-tab-active:border-b-orange-600 hs-tab-active:font-semibold hs-tab-active:text-gray-900"
				id="bar-with-underline-item-2"
				data-hs-tab="#bar-with-underline-2"
				aria-controls="bar-with-underline-2"
				role="tab"
			>
				Laufende
			</button>
			<button
				type="button"
				class="relative min-w-0 flex-1 overflow-hidden border-l border-b-2 bg-white p-4 text-center text-sm font-medium text-gray-600 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 hs-tab-active:border-b-orange-600 hs-tab-active:font-semibold hs-tab-active:text-gray-900"
				id="bar-with-underline-item-3"
				data-hs-tab="#bar-with-underline-3"
				aria-controls="bar-with-underline-3"
				role="tab"
			>
				Vergangene
			</button>
		</nav>
		<div class="mt-3">
			<div
				id="bar-with-underline-1"
				role="tabpanel"
				aria-labelledby="bar-with-underline-item-1"
			>
				<p class="mb-3 dark:text-gray-400">
					Hier werden kommende Reservierungen angezeigt.
				</p>
				<AssetStatus
					role="user"
					v-for="reservation in upcomingReservations"
					:key="reservation.id"
					:id="reservation.asset.id"
					status="soon"
					:reservation-id="reservation.id"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					@delete="deleteReservation(reservation.id)"
					@edit="editReservation(reservation.id)"
					popover-edit="bearbeiten"
					popover-delete="Löschen"
				>
				</AssetStatus>
			</div>
			<div
				id="bar-with-underline-2"
				class="hidden"
				role="tabpanel"
				aria-labelledby="bar-with-underline-item-2"
			>
				<p class="mb-3 text-gray-400">
					Hier werden laufende Reservierungen angezeigt.
				</p>
				<AssetStatus
					role="user"
					v-for="reservation in upcomingReturns"
					:key="reservation.id"
					:id="reservation.asset.id"
					:reservation-id="reservation.id"
					status="now"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					popover-edit="bearbeiten"
					@edit="editReservation(reservation.id)"
				>
				</AssetStatus>
			</div>
			<div
				id="bar-with-underline-3"
				class="hidden"
				role="tabpanel"
				aria-labelledby="bar-with-underline-item-3"
			>
				<p class="mb-3 text-gray-400">
					Hier werden vergangene Reservierungen angezeigt.
				</p>
				<AssetStatus
					role="user"
					v-for="reservation in pastReservations"
					:key="reservation.id"
					status="past"
					:id="reservation.asset.id"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus>
			</div>
		</div>
	</div>
</template>
