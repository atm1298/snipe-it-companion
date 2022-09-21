<script setup lang="ts">
import {
	ClipboardCheckIcon,
	HomeIcon,
	LogoutIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/vue/outline";

import CategoryDiscloure from "./CategoryDiscloure.vue";

const emit = defineEmits(["close"]);
</script>

<template>
	<div
		class="scrollbar-y fixed inset-y-0 left-0 z-[60] w-72 transform overflow-y-auto border-r border-gray-300 bg-white p-2 pt-4 pb-10 transition-all duration-300 lg:static lg:right-auto lg:bottom-0 lg:block"
	>
		<div class="">
			<img
				class="mx-2 h-20 md:h-16"
				src="../components/icons/logo_uni_siegel.png"
				alt="Workflow"
			/>
		</div>
		<div class="mb-2 border-b p-2">
			<h3 class="">Name Nachname</h3>
			<p class="text-sm font-medium text-gray-400 md:text-base">Rolle</p>
		</div>

		<nav class="flex w-full flex-col flex-wrap">
			<ul class="space-y-5">
				<li>
					<RouterLink
						class="flex w-full items-center gap-x-3 rounded-lg p-2 text-base hover:bg-gray-100"
						to="/"
						active-class="font-semibold rounded-xl border-l-8 border-orange-500 text-orange-600"
						@click="emit('close')"
					>
						<HomeIcon class="h-4 w-4 md:h-5 md:w-5" />
						<h4 class="text-gray-900">Dashboard</h4>
					</RouterLink>
				</li>

				<li>
					<RouterLink
						class="flex w-full items-center gap-x-3 rounded-lg p-2 text-base hover:bg-gray-100"
						to="/search"
						active-class="font-semibold rounded-xl border-l-8 border-orange-500 text-orange-600"
						@click="emit('close')"
					>
						<SearchIcon class="h-4 w-4 md:h-5 md:w-5" />
						<h4 class="text-gray-900">Suche</h4>
					</RouterLink>
				</li>
				<li>
					<CategoryDiscloure></CategoryDiscloure>
				</li>
				<h3 class="px-2 text-sm font-semibold text-gray-500 md:text-base">
					VERWALTUNG
				</h3>
				<li>
					<RouterLink
						class="flex items-center gap-x-3 rounded-lg p-2 text-base hover:bg-gray-100"
						to="/administration"
						active-class="font-semibold rounded-xl border-l-8 border-orange-500 text-orange-600"
						@click="emit('close')"
					>
						<ClipboardCheckIcon class="h-4 w-4 md:h-5 md:w-5" />
						<h4 class="text-gray-900">Reservierungen</h4>
					</RouterLink>
				</li>
				<h3 class="px-2 text-sm font-semibold text-gray-500 md:text-base">
					PERSÖNLICHES
				</h3>
				<li>
					<RouterLink
						class="flex w-full items-center gap-x-3 rounded-lg p-2 hover:bg-gray-100 md:text-base"
						to="/profil"
						active-class="font-semibold rounded-xl border-l-8 border-orange-500 text-orange-600"
						@click="emit('close')"
					>
						<UserIcon class="h-4 w-4 md:h-5 md:w-5" />
						<h4 class="text-gray-900">Profil</h4>
					</RouterLink>
				</li>
				<li>
					<RouterLink
						class="flex w-full items-center gap-x-3 rounded-lg p-2 hover:bg-gray-100 md:text-base"
						to="/login"
						active-class="font-semibold rounded-xl border-l-8 border-orange-500 text-orange-600"
						@click="emit('close')"
					>
						<LogoutIcon class="h-4 w-4 md:h-5 md:w-5" />
						<h4 class="text-gray-900">Ausloggen</h4>
					</RouterLink>
				</li>
			</ul>
		</nav>
	</div>
</template>
