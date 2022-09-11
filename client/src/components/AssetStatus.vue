<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import deLocale from "date-fns/locale/de";

import BaseTooltip from "./BaseTooltip.vue";

interface Props {
	status: "soon" | "now" | "past";
	role: "admin" | "user";
	name: string;
	dateEnd: string;
	dateStart: string;
	image?: string;
}
const props = defineProps<Props>();

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
	<div
		v-if="role == 'user'"
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
			<BaseTooltip theme="good">abgeholt</BaseTooltip>
			<BaseTooltip theme="bad">nicht abgeholt</BaseTooltip>
		</div>
	</div>
</template>
