<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";

import ButtonInfo from "@/components/ButtonInfo.vue";
import CategoryList from "@/components/CategoryList.vue";
import DateRange from "@/components/DateRange.vue";
</script>

<template>
	<div class="space-y-6">
		<DateRange></DateRange>
		<div>
			<h2>Material</h2>
			<p class="mb-2">Wähle dein Material aus</p>
			<form method="get" action="/assets" class="relative mb-4">
				<input
					type="search"
					id="search"
					name="search"
					class="block w-full rounded-full border-gray-50 bg-gray-100 py-3 px-4 pl-11 text-sm focus:z-10 focus:border-teal-500 focus:ring-teal-500"
					placeholder="Suche"
				/>
				<div
					class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
				>
					<SearchIcon class="h-4 w-4 text-gray-400"></SearchIcon>
				</div>
			</form>
			<h3 class="mb-2">Vorschläge</h3>
			<CategoryList class="mb-4" />
			<RouterLink to="/categories"
				><ButtonInfo>Kategorien anzeigen</ButtonInfo>
			</RouterLink>
		</div>
	</div>
</template>
