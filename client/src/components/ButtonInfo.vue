<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/outline";
</script>

<template>
	<div
		class="flex flex-row items-center justify-between rounded-lg border bg-gray-300 bg-opacity-20 px-3 py-2 text-gray-900 hover:bg-gray-400 hover:bg-opacity-20 focus:ring-gray-200"
	>
		<p class="text-base font-semibold text-gray-900"><slot></slot></p>
		<ChevronDownIcon class="h-4 w-4"></ChevronDownIcon>
	</div>
</template>
