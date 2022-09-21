<script setup lang="ts">
import { RouterView } from "vue-router";

import Navbar from "./components/Navbar.vue";
</script>

<template>
	<div class="min-h-screen grid-cols-[auto_1fr] bg-gray-50 p-4 lg:grid lg:p-0">
		<Navbar></Navbar>

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
