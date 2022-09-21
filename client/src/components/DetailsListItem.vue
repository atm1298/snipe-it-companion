<script setup lang="ts">
defineProps<{
	title: string;
	desciption: string;
}>();
</script>

<template>
	<div>
		<p class="text-gray-500">{{ title }}</p>
		<p class="font-medium">{{ desciption }}</p>
	</div>
</template>
