<script setup lang="ts">
import { computed } from "vue";

interface Props {
	reservations: Array<any>;
}
const props = defineProps<Props>();
const attributes = computed(() =>
	props.reservations
		.map(reservation => [
			{
				key: reservation.id + "A",
				dot: "orange",
				dates: reservation.dateStart,
				popover: {
					label: "Abholung von " + reservation.asset.name,
					visibility: "focus",
				},
			},
			{
				key: reservation.id + "R",
				dot: "purple",
				dates: reservation.dateEnd,
				popover: {
					label: "Rückgabe von " + reservation.asset.name,
					visibility: "focus",
				},
			},
		])
		.flat()
);
</script>

<template>
	<div class="border-b p-2 md:rounded-2xl md:border md:border-gray-200 md:p-4">
		<h1>Kalenderübersicht</h1>
		<v-calendar
			:from-date="new Date()"
			:attributes="attributes"
			is-expanded
			trim-weeks
			class="rounded-2xl border border-white"
		/>
	</div>
</template>
