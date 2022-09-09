<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/outline";
</script>

<template>
	<div
		class="flex flex-row items-center justify-between rounded-xl bg-gray-50 px-4 py-3 text-gray-600"
	>
		<h3 class="text-gray-700"><slot></slot></h3>
		<ChevronRightIcon class="h-4 w-4"></ChevronRightIcon>
	</div>
</template>
