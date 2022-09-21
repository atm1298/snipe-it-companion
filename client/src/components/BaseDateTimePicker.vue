<script setup lang="ts">
import { computed, ref } from "vue";

import { useDateStore } from "@/stores/date";

interface Props {
	assetId?: number;
}

const props = defineProps<Props>();
const dateStore = useDateStore();
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const reservations = ref([]);
if (props.assetId) {
	fetch(
		import.meta.env.VITE_SERVER_URL + "/reservation?assetId=" + props.assetId,
		options
	)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			reservations.value = data;
		});
}
const reservedDays = computed(() =>
	reservations.value.map(reservation => ({
		start: new Date(reservation.dateStart),
		end: new Date(reservation.dateEnd),
	}))
);
</script>

<template>
	<div>
		<v-date-picker
			class="border-white"
			mode="dateTime"
			v-model="dateStore.$state"
			:min-date="new Date()"
			is-range
			is24hr
			:valid-hours="{
				min: 9,
				max: 16,
			}"
			:minute-increment="5"
			color="orange"
			:disabled-dates="[...reservedDays, { weekdays: [1, 7] }]"
			is-expanded
		/>
		<div class="mt-2 flex">
			<!-- <span class="w-20 font-semibold text-gray-600">Abholung:</span>
			<span class="ml-2">{{ dateStore.formattedStart }}</span> -->
		</div>
		<div class="mt-2 flex">
			<!-- <span class="w-20 font-semibold text-gray-600">Rückgabe:</span>
			 <span class="ml-2">{{ dateStore.formattedEnd }}</span> -->
		</div>
	</div>
</template>
