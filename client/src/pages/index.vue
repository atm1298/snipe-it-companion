<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import CategoryList from "@/components/CategoryList.vue";
import DateRange from "@/components/DateRange.vue";

import AssetStatus from "../components/AssetStatus.vue";
import BaseButton from "../components/BaseButton.vue";
import BaseDiscloure from "../components/BaseDiscloure.vue";
import deLocale from "date-fns/locale/de";
import BaseTooltip from "./BaseTooltip.vue";
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

const upcomingReservations = computed(
	() =>
		reservations.value?.filter(
			reservation =>
				new Date(reservation.dateStart) > startOfToday() && !reservation.received
		) ?? []
);
const upcomingReturns = computed(
	() =>
		reservations.value?.filter(
			reservation =>
				new Date(reservation.dateEnd) > startOfToday() &&
				reservation.received &&
				!reservation.returned
		) ?? []
);

const pastReservations = computed(
	() =>
		reservations.value?.filter(
			reservation =>
				new Date(reservation.dateEnd) > startOfToday() &&
				reservation.received &&
				reservation.returned
		) ?? []
);
function deleteReservation(type: string, id: number) {
	fetch("http://localhost:3000/reservation/" + type, {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "DELETE",
		body: JSON.stringify({
			reservationId: id,
		}),
	})
		.then(res => res.json())
		.then(data => console.log(data));
}
</script>

<template>
	<div class="grid w-full grid-cols-1 gap-4 p-2 md:grid-cols-2 md:p-4">
		<div class="h-min rounded-2xl md:border md:border-gray-200 md:p-4">
			<h1 class="px-2">Ausleihübersicht</h1>
			<BaseDiscloure default-open theme="default" title="Laufende Ausleihe">
				<AssetStatus
					role="user"
					v-for="reservation in upcomingReservations"
					:key="reservation.id"
					:id="reservation.asset.id"
					status="now"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					@accept="deleteReservation('edit', reservation.id)"
					popover-edit="bearbeiten"
					popover-delete="Löschen"
				>
				</AssetStatus>
			</BaseDiscloure>
			<BaseDiscloure theme="default" title="Kommende Ausleihe">
				<AssetStatus
					role="user"
					v-for="reservation in upcomingReturns"
					:key="reservation.id"
					:id="reservation.asset.id"
					status="soon"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					@accept="deleteReservation('delete', reservation.id)"
					popover-edit="bearbeiten"
					popover-delete="Löschen"
				>
				</AssetStatus
			></BaseDiscloure>
			<BaseDiscloure theme="default" title="Vergangene Ausleihe">
				<AssetStatus
					role="user"
					v-for="reservation in pastReservations"
					:key="reservation.id"
					status="past"
					:id="reservation.asset.id"
					:image="reservation.asset.image"
					:name="reservation.asset.name"
					:dateEnd="reservation.dateEnd"
					:dateStart="reservation.dateStart"
					@accept="deleteReservation('edit', reservation.id)"
					popover-edit="bearbeiten"
					popover-delete="Löschen"
				>
				</AssetStatus
			></BaseDiscloure>
		</div>
		<div
			class="hidden h-min space-y-4 rounded-2xl border border-gray-200 p-4 md:block"
		>
			<h1>Neues Material ausleihen</h1>
			<DateRange class="border-white"></DateRange>
			<div class="p-2">
				<h2>Material</h2>
				<p class="mb-2">Nach was für Material suchst du?</p>
				<form method="get" action="/assets" class="relative mb-4">
					<input
						type="search"
						id="search"
						name="search"
						class="block w-full rounded-xl border-gray-200 bg-gray-200 py-3 px-4 pl-11 text-sm hover:bg-gray-300 focus:z-10 focus:border-gray-200 focus:ring-gray-200"
						placeholder="Suche"
					/>
					<div
						class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
					>
						<SearchIcon class="h-4 w-4 text-gray-500"></SearchIcon>
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