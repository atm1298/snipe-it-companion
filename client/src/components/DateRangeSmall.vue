<script setup lang="ts">
import { ArrowNarrowRightIcon, CalendarIcon } from "@heroicons/vue/outline";
import { computed, ref, watch } from "vue";

interface Props {
	dateStart: string;
	dateEnd: string;
	reservationId: string;
}
const props = defineProps<Props>();

const dates = ref({
	start: props.dateStart,
	end: props.dateEnd,
});
watch(dates, () => {
	fetch(import.meta.env.VITE_SERVER_URL + "/reservation/patch", {
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		method: "PATCH",
		body: JSON.stringify({
			reservationId: props.reservationId,
			dateStart: dates.value.start,
			dateEnd: dates.value.end,
		}),
	})
		.then(res => res.json())
		.then(data => console.log(data));
});
const isActive = computed(() => new Date(props.dateStart) < new Date());
</script>

<template>
	<form class="rounded-xl text-base font-medium" @submit.prevent>
		<div>
			<h3 class="mb-2 block text-left text-base text-gray-900">Ausleihzeitraum</h3>
			<v-date-picker
				v-model="dates"
				mode="dateTime"
				:masks="{
					input: 'YYYY-MM-DD h:mm A',
				}"
				is-range
				is24hr
				:valid-hours="{
					min: 9,
					max: 16,
				}"
				:minute-increment="5"
				color="orange"
				:disabled-dates="{ weekdays: [1, 7] }"
			>
				<template v-slot="{ inputValue, inputEvents, isDragging }">
					<div class="flex flex-row items-center justify-start">
						<div class="relative flex-grow">
							<CalendarIcon
								class="pointer-events-none absolute mx-2 h-full w-4 text-gray-600"
							></CalendarIcon>
							<input
								:disabled="!isActive"
								class="w-full flex-grow rounded-md border bg-gray-100 py-1 pl-8 pr-2"
								:class="isDragging ? 'text-gray-600' : 'text-gray-900'"
								:value="inputValue.start"
								v-on="inputEvents.start"
							/>
						</div>
						<span class="m-2 flex-shrink-0">
							<ArrowNarrowRightIcon
								class="block h-4 w-4 text-gray-600"
							></ArrowNarrowRightIcon
						></span>
						<div class="relative flex-grow">
							<CalendarIcon
								class="pointer-events-none absolute mx-2 h-full w-4 text-gray-600"
							></CalendarIcon>
							<input
								class="w-full flex-grow rounded-md border bg-gray-100 py-1 pl-8 pr-2"
								:class="isDragging ? 'text-gray-600' : 'text-gray-900'"
								:value="inputValue.end"
								v-on="inputEvents.end"
							/>
						</div>
					</div>
				</template>
			</v-date-picker>
		</div>
	</form>
</template>
