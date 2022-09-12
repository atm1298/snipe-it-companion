<script setup lang="ts">
import { ref } from "vue";

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
fetch("http://localhost:3000/reservation?userId=1", options)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		reservations.value = data;
	});
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-4 p-2 md:p-4 lg:grid-cols-2">
		<div class="">
			<BaseCalender></BaseCalender>
		</div>
		<div class="h-min rounded-2xl md:border md:border-gray-200 md:p-4">
			<h1 class="p-2">Reservierungen</h1>
			<BaseDiscloure default-open theme="default" title="Laufende Reservierungen">
				<AssetStatus
					role="admin"
					:id="reservation.asset.id"
					v-for="reservation in reservations"
					:key="reservation.id"
					status="now"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus>
			</BaseDiscloure>
			<BaseDiscloure default-open theme="default" title="Kommende Reservierungen">
				<AssetStatus
					role="admin"
					:id="reservation.asset.id"
					v-for="reservation in reservations"
					:key="reservation.id"
					status="soon"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus
			></BaseDiscloure>
			<BaseDiscloure theme="default" title="Vergangene Reservierungen">
				<AssetStatus
					role="admin"
					:id="reservation.asset.id"
					v-for="reservation in reservations"
					:key="reservation.id"
					status="past"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus
			></BaseDiscloure>
		</div>
	</div>
</template>
