<script setup lang="ts">
import { useDateStore } from "@/stores/date";

const dateStore = useDateStore();
</script>

<template>
	<div>
		<v-date-picker
			class="border-white"
			mode="dateTime"
			v-model="dateStore.$state"
			:min-date="new Date()"
			is-range
			is24hr
			:valid-hours="{
				min: 9,
				max: 16,
			}"
			:minute-increment="5"
			color="orange"
			:disabled-dates="{ weekdays: [1, 7] }"
			is-expanded
		/>
		<div class="mt-2 flex">
			<!-- <span class="w-20 font-semibold text-gray-600">Abholung:</span>
			<span class="ml-2">{{ dateStore.formattedStart }}</span> -->
		</div>
		<div class="mt-2 flex">
			<!-- <span class="w-20 font-semibold text-gray-600">Rückgabe:</span>
			 <span class="ml-2">{{ dateStore.formattedEnd }}</span> -->
		</div>
	</div>
</template>
