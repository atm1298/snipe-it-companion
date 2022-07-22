<script setup lang="ts">
interface Props {
	status: "soon" | "now" | "past";
	days: number | string;
}
const props = defineProps<Props>();

function getStatusText() {
	const statusText = {
		soon: `In ${props.days} Tagen`,
		past: `Zurückgegeben`,
		now: `Noch ${props.days} Tagen`,
	};
	return statusText[props.status];
}
</script>

<template>
	<div class="flex flex-col rounded-lg bg-gray-300 px-1 py-2 text-lg">
		<h2><slot></slot></h2>
		<p class="text-sm text-orange-600">{{ getStatusText() }}</p>
	</div>
</template>
