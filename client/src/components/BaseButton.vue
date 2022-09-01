<script setup lang="ts">
interface Props {
	theme: "primary" | "secondary";
}

defineProps<Props>();
</script>

<template>
	<button
		type="button"
		class="rounded-full px-4 py-2 text-center text-sm font-semibold focus:outline-none focus:ring-1"
		:class="{
			'bg-teal-600 text-white hover:bg-teal-600 focus:ring-teal-200':
				theme == 'primary',
			'bg-teal-50 text-teal-600 hover:bg-teal-300 focus:ring-teal-200':
				theme == 'secondary',
		}"
	>
		<slot></slot>
	</button>
</template>
