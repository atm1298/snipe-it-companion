<script setup lang="ts">
interface Props {
	theme: "primary" | "secondary";
}

defineProps<Props>();
</script>

<template>
	<button
		type="button"
		class="mr-2 mb-2 rounded-2xl px-5 py-2.5 text-center text-sm font-semibold focus:outline-none focus:ring-4"
		:class="{
			'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-300':
				theme == 'primary',
			'bg-orange-200 text-orange-600 hover:bg-orange-300 focus:ring-orange-300':
				theme == 'secondary',
		}"
	>
		<slot></slot>
	</button>
</template>
