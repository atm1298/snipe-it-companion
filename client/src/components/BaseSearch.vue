<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";
</script>

<template>
	<form method="get" action="/assets" class="relative">
		<input
			type="search"
			id="search"
			name="search"
			class="mb-2 block w-full rounded-md border-gray-300 py-3 px-4 pl-11 text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-600"
			placeholder="Suche"
		/>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
		>
			<SearchIcon class="h-4 w-4 text-gray-900"></SearchIcon>
		</div>
	</form>
</template>
