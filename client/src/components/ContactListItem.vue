<script setup lang="ts">
defineProps<{
	name: string;
	email: string;
	room: string;
}>();
</script>

<template>
	<div class="flex flex-row justify-start space-x-4">
		<h3 class="w-16">Name</h3>
		<p>{{ name }}</p>
	</div>
	<div class="flex flex-row justify-start space-x-4">
		<h3 class="w-16">E-Mail</h3>
		<p>{{ email }}</p>
	</div>
	<div class="flex flex-row justify-start space-x-4">
		<h3 class="w-16">Lageort</h3>
		<p>{{ room }}</p>
	</div>
</template>
