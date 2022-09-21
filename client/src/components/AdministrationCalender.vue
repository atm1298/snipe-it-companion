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
				bar: "orange",
				dates: reservation.dateStart,
				popover: {
					label: "Abholung von " + reservation.asset.name,
					visibility: "focus",
				},
			},
			{
				key: reservation.id + "R",
				bar: "purple",
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
	<div class="">
		<h1 class="mb-4">Termine</h1>
		<v-calendar
			:from-date="new Date()"
			:attributes="attributes"
			trim-weeks
			is-expanded
			class="rounded-xl border border-white"
		/>
	</div>
</template>
