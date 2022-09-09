<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import CategoryList from "@/components/CategoryList.vue";
import DateRange from "@/components/DateRange.vue";

import AssetStatus from "../components/AssetStatus.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseDiscloure from "../components/BaseDiscloure.vue";
// ALLE ASSETS TEST HEHE
const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
const reservations = ref();
fetch("http://localhost:3000/reservation?userId=1", options)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		reservations.value = data;
	});
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-4 p-2 md:grid-cols-2 md:p-4">
		<div class="h-min rounded-2xl md:border md:border-gray-200 md:p-4">
			<h1 class="p-2">Ausleihübersicht</h1>
			<BaseDiscloure default-open title="Laufende Ausleihe">
				<AssetStatus
					v-for="reservation in reservations"
					:key="reservation.id"
					status="now"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus>
			</BaseDiscloure>
			<BaseDiscloure default-open title="Kommende Ausleihe">
				<AssetStatus
					v-for="reservation in reservations"
					:key="reservation.id"
					status="soon"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus
			></BaseDiscloure>
			<BaseDiscloure default-open title="Vergangene Ausleihe">
				<AssetStatus
					v-for="reservation in reservations"
					:key="reservation.id"
					status="past"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
				>
				</AssetStatus
			></BaseDiscloure>
		</div>
		<div
			class="hidden h-min space-y-4 rounded-2xl border border-gray-200 p-4 md:block"
		>
			<h1>Neues Material ausleihen</h1>
			<DateRange class="border-white"></DateRange>
			<div>
				<h2>Material</h2>
				<p class="mb-2">Nach was für Material suchst du?</p>
				<form method="get" action="/assets" class="relative mb-4">
					<input
						type="search"
						id="search"
						name="search"
						class="focus:border-gray-20000 block w-full rounded-xl border-gray-200 bg-gray-200 py-3 px-4 pl-11 text-sm focus:z-10 focus:ring-gray-700"
						placeholder="Suche"
					/>
					<div
						class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
					>
						<SearchIcon class="h-4 w-4 text-gray-400"></SearchIcon>
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
	</div>
</template>
