<script setup lang="ts">
import { startOfToday } from "date-fns";
import { computed, ref } from "vue";

import AssetStatus from "../components/AssetStatus.vue";
import BaseCalender from "../components/BaseCalender.vue";
import BaseDiscloure from "../components/BaseDiscloure.vue";
// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const reservations = ref();
fetch("http://localhost:3000/reservation", options)
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
	fetch("http://localhost:3000/reservation/" + type, {
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
	<div class="grid w-full grid-cols-1 gap-4 p-2 md:p-4 lg:grid-cols-2">
		<div class="">
			<BaseCalender></BaseCalender>
		</div>
		<div class="h-min rounded-2xl md:border md:border-gray-200 md:p-4">
			<h1 class="p-2">Reservierungen</h1>
			<BaseDiscloure
				default-open
				theme="default"
				title="Rückgabe"
				v-if="upcomingReturns.length > 0"
			>
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
			</BaseDiscloure>
			<BaseDiscloure
				default-open
				theme="default"
				title="Abholung"
				v-if="upcomingReservations.length > 0"
			>
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
				</AssetStatus
			></BaseDiscloure>
		</div>
	</div>
</template>
