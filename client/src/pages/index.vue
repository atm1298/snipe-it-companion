<script setup lang="ts">
import DateRange from "@/components/DateRange.vue";

import BaseButton from "../components/BaseButton.vue";
import Tab from "../components/TabUser.vue";
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:p-4">
		<Tab></Tab>
		<div class="hidden h-min space-y-4 border-l border-gray-300 pl-8 md:block">
			<h1>Neues Material ausleihen</h1>
			<DateRange></DateRange>
			<div class="p-2">
				<h2>Material</h2>
				<p class="mb-2">Nach was für Material suchst du?</p>
				<form method="get" action="/assets">
					<div class="relative">
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
					</div>
					<BaseButton theme="primary" class="mb-2 w-full" type="submit"
						>Suchen</BaseButton
					>
				</form>
				<RouterLink to="/categories"
					><BaseButton theme="secondary" class="w-full"
						>Alle Kategorien anzeigen</BaseButton
					>
				</RouterLink>
			</div>
		</div>
	</div>
</template>
