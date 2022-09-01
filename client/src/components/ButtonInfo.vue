<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/outline";
</script>

<template>
	<div
		class="flex flex-row items-center justify-between rounded-full bg-teal-50 px-4 py-3 text-teal-600"
	>
		<h3 class="text-teal-700"><slot></slot></h3>
		<ChevronRightIcon class="h-4 w-4"></ChevronRightIcon>
	</div>
</template>
