<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";

import DateRange from "@/components/DateRange.vue";

import BaseButton from "../components/BaseButton.vue";
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:p-4">
		<div class="h-min md:border-r md:pr-8">
			<DateRange></DateRange>
		</div>
		<div class="space-y-2">
			<h2>Material</h2>
			<p class="mb-2">Benötigtes Material suchen</p>
			<div class="flex flex-col gap-3">
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
					<BaseButton theme="primary" class="w-full" type="submit"
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
