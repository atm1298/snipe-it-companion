<script setup lang="ts">
interface Props {
	theme: "primary" | "secondary";
}

defineProps<Props>();
</script>

<template>
	<button
		type="button"
		class="rounded-xl px-4 py-2 text-center text-sm font-semibold focus:outline-none focus:ring-1"
		:class="{
			'bg-gray-600 text-white hover:bg-gray-600 focus:ring-gray-200':
				theme == 'primary',
			'bg-gray-50 text-gray-600 hover:bg-gray-300 focus:ring-gray-200':
				theme == 'secondary',
		}"
	>
		<slot></slot>
	</button>
</template>
