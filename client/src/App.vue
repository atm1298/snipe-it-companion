<script setup lang="ts">
import { RouterView } from "vue-router";

import BaseSideBar from "./components/BaseSideBar.vue";
</script>

<template>
	<div class="min-h-screen grid-cols-[auto_1fr] lg:grid">
		<BaseSideBar></BaseSideBar>

		<main class="mx-auto flex w-full">
			<RouterView />
		</main>
	</div>
</template>

<style>
#app {
	min-height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr;
}
</style>
