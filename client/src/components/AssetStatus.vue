<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import deLocale from "date-fns/locale/de";

import { useDateStore } from "@/stores/date";

import BaseTooltip from "./BaseTooltip.vue";
import DateRangeSmall from "./DateRangeSmall.vue";

interface Props {
	status: "soon" | "now" | "past";
	role: "admin" | "user";
	popoverAccept: string;
	popoverDeny: string;
	popoverEdit: string;
	popoverDelete: string;
	id: number;
	name: string;
	dateEnd: string;
	dateStart: string;
	image?: string;
	reservationId: string;
}
const props = defineProps<Props>();
const emits = defineEmits(["accept", "deny", "edit", "delete"]);
const options = {
	weekday: "short",
	day: "numeric",
	month: "long",
	hour: "2-digit",
	minute: "2-digit",
};
const dateStore = useDateStore();

function getStatusText() {
	const statusText = {
		soon: `In ${formatDistanceToNowStrict(new Date(props.dateStart), {
			locale: deLocale,
		})}`,
		past: `Zurückgegeben`,
		now: `Noch ${formatDistanceToNowStrict(new Date(props.dateEnd), {
			locale: deLocale,
		})}`,
	};
	return statusText[props.status];
}
</script>

<template>
	<div v-if="role == 'user'" class="mb-2 rounded-md border bg-white p-4">
		<div class="grid grid-cols-[1fr_2fr] gap-2">
			<img
				v-if="image"
				class="h-20 object-contain"
				:src="image"
				alt="Image Description"
			/>
			<div class="w-full">
				<h3 class="mb-2">{{ name }}</h3>
				<div class="flex items-center justify-between">
					<p class="text-orange-600">{{ getStatusText() }}</p>
					<BaseTooltip theme="delete" :id="id" @click="emits('delete')">{{
						popoverDelete
					}}</BaseTooltip>
				</div>

				<!-- <p class="hidden text-sm md:block">
						Abholung:
						{{ new Date(dateStart).toLocaleString("de-DE", options) }} <br />
						Rückgabe:
						{{ new Date(dateEnd).toLocaleString("de-DE", options) }}
					</p> -->
			</div>
			<DateRangeSmall
				:date-start="dateStart"
				:date-end="dateEnd"
				:reservation-id="reservationId"
				class="col-span-2"
			></DateRangeSmall>
		</div>
	</div>
	<div
		v-else-if="role == 'admin'"
		class="mb-2 flex items-center justify-between gap-2 rounded-md border bg-white p-4"
	>
		<div class="flex gap-4">
			<img
				v-if="image"
				class="w-20 object-contain"
				:src="image"
				alt="Image Description"
			/>
			<div>
				<h3 class="">{{ name }}</h3>
				<p class="text-orange-600">{{ getStatusText() }}</p>
				<p>
					Abholung: {{ new Date(dateStart).toLocaleString("de-DE", options) }}
				</p>
				<p>
					Rückgabe:
					{{ new Date(dateEnd).toLocaleString("de-DE", options) }}
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-2 lg:flex-row">
			<BaseTooltip theme="good" @click="emits('accept')">{{
				popoverAccept
			}}</BaseTooltip>
			<BaseTooltip theme="bad" @click="emits('deny')">{{
				popoverDeny
			}}</BaseTooltip>
		</div>
	</div>
</template>
