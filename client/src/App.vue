<script setup lang="ts">
import { RouterView } from "vue-router";

import SideBar from "./components/SideBar.vue";
</script>

<template>
	<div class="min-h-screen grid-cols-[auto_1fr] lg:grid">
		<SideBar></SideBar>

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
