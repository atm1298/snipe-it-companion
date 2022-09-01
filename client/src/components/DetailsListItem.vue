<script setup lang="ts">
defineProps<{
	title: string;
	desciption: string;
}>();
</script>

<template>
	<div>
		<h3>{{ title }}</h3>
		<p>{{ desciption }}</p>
	</div>
</template>
