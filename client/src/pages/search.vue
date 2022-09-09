<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";

import CategoryList from "@/components/CategoryList.vue";
import DateRange from "@/components/DateRange.vue";

import BaseButton from "../components/BaseButton.vue";
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-4 p-2 md:grid-cols-2 md:p-4">
		<div><DateRange></DateRange></div>
		<div class="h-min rounded-2xl border border-gray-200 p-2 md:p-4">
			<h2>Material</h2>
			<p class="mb-2">Nach was für Material suchst du?</p>
			<form method="get" action="/assets" class="relative">
				<input
					type="search"
					id="search"
					name="search"
					class="block w-full rounded-xl border-gray-200 bg-gray-200 py-3 px-4 pl-11 text-sm focus:z-10 focus:border-gray-200 focus:ring-gray-700"
					placeholder="Suche"
				/>
				<div
					class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
				>
					<SearchIcon class="h-4 w-4 text-gray-900"></SearchIcon>
				</div>
			</form>

			<CategoryList class="mb-2" />
			<RouterLink to="/categories"
				><BaseButton theme="primary" class="w-full"
					>Alle Kategorien anzeigen</BaseButton
				>
			</RouterLink>
		</div>
	</div>
</template>
