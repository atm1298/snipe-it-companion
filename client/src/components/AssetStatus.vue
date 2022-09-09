<script setup lang="ts">
import { formatDistanceToNowStrict } from "date-fns";
import deLocale from "date-fns/locale/de";

interface Props {
	status: "soon" | "now" | "past";

	name: string;
	dateEnd: string;
	dateStart: string;
	image: string;
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
	<div class="flex rounded-xl border py-2 text-lg">
		<img class="w-20 object-contain" :src="image" alt="Image Description" />

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
</template>
