<script setup lang="ts">
interface Props {
	theme: "primary" | "secondary";
}

defineProps<Props>();
</script>

<template>
	<button
		type="button"
		class="rounded-xl px-4 py-3 text-center text-sm font-semibold focus:outline-none focus:ring-1"
		:class="{
			'bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-200':
				theme == 'primary',
			'bg-orange-100 text-orange-800 hover:bg-orange-200 focus:ring-orange-200':
				theme == 'secondary',
		}"
	>
		<slot></slot>
	</button>
</template>
