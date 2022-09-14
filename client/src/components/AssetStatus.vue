<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import deLocale from "date-fns/locale/de";

import BaseTooltip from "./BaseTooltip.vue";

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
	<div v-if="role == 'user'" class="mb-2 rounded-xl border p-2 text-lg">
		<div class="grid grid-cols-3 gap-2">
			<img
				v-if="image"
				class="w-20 object-contain md:w-28"
				:src="image"
				alt="Image Description"
			/>
			<div class="col-span-2 flex items-center justify-between gap-2">
				<div class="">
					<h3 class="text-base text-gray-900">{{ name }}</h3>
					<p class="text-sm text-orange-600">{{ getStatusText() }}</p>
					<p class="hidden text-sm md:block">
						Abholung:
						{{ new Date(dateStart).toLocaleString("de-DE", options) }} <br />
						Rückgabe:
						{{ new Date(dateEnd).toLocaleString("de-DE", options) }}
					</p>
				</div>
				<div class="flex flex-col gap-2 lg:flex-row">
					<BaseTooltip theme="edit" :id="id" @click="emits('edit')">{{
						popoverEdit
					}}</BaseTooltip>
					<BaseTooltip theme="bad" :id="id" @click="emits('delete')">{{
						popoverDelete
					}}</BaseTooltip>
				</div>
			</div>

			<div class="col-span-3">
				<p class="block text-sm md:hidden">
					Abholung:
					{{ new Date(dateStart).toLocaleString("de-DE", options) }} <br />
					Rückgabe:
					{{ new Date(dateEnd).toLocaleString("de-DE", options) }}
				</p>
			</div>
		</div>
	</div>
	<div
		v-else-if="role == 'admin'"
		class="mb-2 flex items-center justify-between gap-2 rounded-xl border p-2 py-2 text-lg"
	>
		<div class="flex gap-4">
			<img
				v-if="image"
				class="w-20 object-contain"
				:src="image"
				alt="Image Description"
			/>
			<div>
				<h3 class="text-base text-gray-900">{{ name }}</h3>
				<p class="text-sm text-orange-600">{{ getStatusText() }}</p>
				<p class="text-sm">
					Abholung: {{ new Date(dateStart).toLocaleString("de-DE", options) }}
				</p>
				<p class="text-sm">
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
