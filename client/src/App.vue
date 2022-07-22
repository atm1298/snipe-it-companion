<script setup lang="ts">
import { RouterView } from "vue-router";

import BaseSideBar from "./components/BaseSideBar.vue";
</script>

<template>
	<BaseSideBar></BaseSideBar>

	<main class="px-2 lg:pl-[18rem]">
		<RouterView />
	</main>
</template>

<style></style>
