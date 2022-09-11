<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon } from "@heroicons/vue/outline";

interface Props {
	theme: "good" | "bad";
}
defineProps<Props>();
</script>

<template>
	<div class="hs-tooltip inline-block [--placement:left]" v-if="theme == 'good'">
		<button
			type="button"
			class="hs-tooltip-toggle inline-flex h-7 w-7 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-orange-600 md:h-10 md:w-10"
		>
			<CheckCircleIcon
				class="h-5 w-5 text-orange-600 md:h-8 md:w-8"
			></CheckCircleIcon>
			<span
				class="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-gray-900 py-1 px-2 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
				role="tooltip"
			>
				<slot></slot>
			</span>
		</button>
	</div>
	<div class="hs-tooltip inline-block [--placement:left]" v-else>
		<button
			type="button"
			class="hs-tooltip-toggle inline-flex h-7 w-7 items-center justify-center gap-2 rounded-full border border-gray-200 bg-gray-50 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-orange-600 md:h-10 md:w-10"
		>
			<XCircleIcon class="h-5 w-5 text-gray-600 md:h-8 md:w-8"></XCircleIcon>
			<span
				class="hs-tooltip-content invisible absolute z-10 inline-block rounded-md bg-gray-900 py-1 px-2 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
				role="tooltip"
			>
				<slot></slot>
			</span>
		</button>
	</div>
</template>
