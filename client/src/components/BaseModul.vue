<script setup lang="ts">
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";
import { ref } from "vue";

import type { SnipeitAsset } from "@/api/snipeit";

import BaseButton from "./BaseButton.vue";

interface Props {
	asset: SnipeitAsset;
}

defineProps<Props>();
const isOpen = ref(false);

function closeModal() {
	isOpen.value = false;
}
function openModal() {
	isOpen.value = true;
}
</script>

<template>
	<BaseButton theme="primary" @click="openModal"> Reservieren </BaseButton>

	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-50" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center p-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel
							class="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle
								as="h3"
								class="flex justify-between text-lg font-medium leading-6 text-gray-900"
							>
								Reservierung bestätigt
							</DialogTitle>

							<div class="mt-2">
								<BaseCardCheckout
									:key="asset.id"
									:id="asset.id"
									:name="asset.name"
									:image="asset.image"
									:status="asset.status_label.name"
								></BaseCardCheckout>
							</div>

							<div class="mt-4 flex justify-center gap-4">
								<RouterLink :to="`/assets/${id}/checkout`"
									><BaseButton theme="secondary">
										Rückgängig
									</BaseButton></RouterLink
								>
								<RouterLink to="/"
									><BaseButton theme="primary">
										Abschließen
									</BaseButton></RouterLink
								>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
