<script setup lang="ts">
import DateRange from "@/components/DateRange.vue";

import BaseButton from "../components/BaseButton.vue";
import Tab from "../components/TabUser.vue";
// ALLE ASSETS TEST HEHE
/* const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
}; */
/* const reservations = ref();
fetch(import.meta.env.VITE_SERVER_URL + "/reservation?userId=1", options)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		reservations.value = data;
	}); */

/* const upcomingReservations = computed(
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
} */
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:p-4">
		<Tab></Tab>
		<!-- <div class="flex flex-col gap-4">
			<h1 class="mb-4">Ausleihübersicht</h1>
			<BaseDiscloure
				default-open
				theme="default"
				title="Laufende Ausleihe"
				v-if="upcomingReturns.length > 0"
			>
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
			</BaseDiscloure>
			<BaseDiscloure
				theme="default"
				title="Kommende Ausleihe"
				v-if="upcomingReservations.length > 0"
			>
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
				</AssetStatus
			></BaseDiscloure>
				<BaseDiscloure
				theme="default"
				title="Vergangene Ausleihe"
				v-if="pastReservations.length > 0"
			>
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
				</AssetStatus
			></BaseDiscloure> 
		</div> -->
		<div class="hidden h-min space-y-4 border-l border-gray-300 pl-8 md:block">
			<h1>Neues Material ausleihen</h1>
			<DateRange></DateRange>
			<div class="p-2">
				<h2>Material</h2>
				<p class="mb-2">Nach was für Material suchst du?</p>
				<form method="get" action="/assets">
					<div class="relative">
						<input
							type="search"
							id="search"
							name="search"
							class="mb-2 block w-full rounded-md border-gray-300 py-3 px-4 pl-11 text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-600"
							placeholder="Suche"
						/>
						<div
							class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
						>
							<SearchIcon class="h-4 w-4 text-gray-900"></SearchIcon>
						</div>
					</div>
					<BaseButton theme="primary" class="mb-2 w-full" type="submit"
						>Suchen</BaseButton
					>
				</form>
				<RouterLink to="/categories"
					><BaseButton theme="secondary" class="w-full"
						>Alle Kategorien anzeigen</BaseButton
					>
				</RouterLink>
			</div>
		</div>
	</div>
</template>
