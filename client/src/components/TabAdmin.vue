<script setup lang="ts">
import { startOfToday } from "date-fns";
import { computed, ref } from "vue";

import AssetStatus from "../components/AssetStatus.vue";

const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const reservations = ref();
fetch(import.meta.env.VITE_SERVER_URL + "/reservation", options)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		reservations.value = data;
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
function updateReservation(type: string, id: number) {
	fetch(import.meta.env.VITE_SERVER_URL + "/reservation/" + type, {
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
				class="active relative min-w-0 flex-1 overflow-hidden border-l border-b-2 bg-white p-4 text-center text-sm font-medium text-gray-600 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 hs-tab-active:border-b-orange-600 hs-tab-active:font-semibold hs-tab-active:text-gray-900"
				id="bar-with-underline-item-1"
				data-hs-tab="#bar-with-underline-1"
				aria-controls="bar-with-underline-1"
				role="tab"
			>
				Abholung
			</button>
			<button
				type="button"
				class="relative min-w-0 flex-1 overflow-hidden border-l border-b-2 bg-white p-4 text-center text-sm font-medium text-gray-600 first:border-l-0 hover:bg-gray-50 hover:text-gray-700 focus:z-10 hs-tab-active:border-b-orange-600 hs-tab-active:font-semibold hs-tab-active:text-gray-900"
				id="bar-with-underline-item-2"
				data-hs-tab="#bar-with-underline-2"
				aria-controls="bar-with-underline-2"
				role="tab"
			>
				Rückgabe
			</button>
		</nav>
		<div class="mt-3">
			<div
				id="bar-with-underline-1"
				role="tabpanel"
				aria-labelledby="bar-with-underline-item-1"
			>
				<p class="mb-3 text-gray-400">
					Hier werden kommende Reservierungen angezeigt.
				</p>
				<AssetStatus
					role="admin"
					:id="reservation.asset.id"
					v-for="reservation in upcomingReservations"
					:key="reservation.id"
					status="soon"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					@accept="updateReservation('receive', reservation.id)"
					popover-accept="abgeholt"
					popover-deny="nicht abgeholt"
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
					role="admin"
					:id="reservation.asset.id"
					v-for="reservation in upcomingReturns"
					:key="reservation.id"
					status="now"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					@accept="updateReservation('return', reservation.id)"
					popover-accept="zurückgebracht"
					popover-deny="nicht zurückgebracht"
				>
				</AssetStatus>
			</div>
		</div>
	</div>
</template>
