<script setup lang="ts">
import { ref } from "vue";

const attributes = ref([
	{
		key: "today",
		dot: "orange",
		dates: new Date(),
		popover: {
			label: "Abholung CoLab 18;00",
			visibility: "focus",
		},
	},
]);
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
