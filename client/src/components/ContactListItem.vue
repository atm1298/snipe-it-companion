<script setup lang="ts">
defineProps<{
	name: string;
	email: string;
	room: string;
}>();
</script>

<template>
	<div class="grid grid-cols-3">
		<p class="font-normal text-gray-500">Name</p>
		<p class="col-span-2 font-medium text-gray-900">{{ name }}</p>
	</div>
	<div class="grid grid-cols-3">
		<p class="font-normal text-gray-500">E-Mail</p>
		<p class="col-span-2 font-medium text-gray-900">{{ email }}</p>
	</div>
</template>
