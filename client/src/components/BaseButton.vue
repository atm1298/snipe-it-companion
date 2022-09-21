<script setup lang="ts">
interface Props {
	theme: "primary" | "secondary";
}

defineProps<Props>();
</script>

<template>
	<button
		type="button"
		class="rounded-md py-2 px-3 text-center text-base font-semibold focus:outline-none focus:ring-1"
		:class="{
			'bg-orange-500 text-white hover:bg-orange-400 focus:ring-orange-200':
				theme == 'primary',
			'bg-orange-300 bg-opacity-20  text-orange-700 hover:bg-orange-400 hover:bg-opacity-20  focus:ring-orange-200':
				theme == 'secondary',
		}"
	>
		<slot></slot>
	</button>
</template>
