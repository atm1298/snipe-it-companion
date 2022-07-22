<script setup lang="ts">
import { ref } from "vue";

const range = ref({ start: new Date(2022, 7, 22), end: new Date(2022, 7, 22) });
</script>

<template>
	<v-date-picker v-model="range" is-range color="orange" :rows="2" is-expanded />
</template>
