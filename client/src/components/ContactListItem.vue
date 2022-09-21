<script setup lang="ts">
defineProps<{
	name: string;
	email: string;
	room: string;
}>();
</script>

<template>
	<div class="grid grid-cols-3">
		<p class="text-gray-600">Name</p>
		<p class="col-span-2 font-medium">{{ name }}</p>
	</div>
	<div class="grid grid-cols-3">
		<p class="text-gray-600">E-Mail</p>
		<p class="col-span-2 font-medium">{{ email }}</p>
	</div>
</template>
