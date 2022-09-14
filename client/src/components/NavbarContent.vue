<script setup lang="ts">
import { ClipboardCheckIcon, HomeIcon, SearchIcon } from "@heroicons/vue/outline";

import CategoryDiscloure from "./CategoryDiscloure.vue";

const emit = defineEmits(["close"]);
</script>

<template>
	<div
		class="scrollbar-y fixed inset-y-0 left-0 z-[60] w-72 transform overflow-y-auto border-r border-gray-200 bg-white p-2 pt-4 pb-10 transition-all duration-300 lg:static lg:right-auto lg:bottom-0 lg:block"
	>
		<div class="mb-2 border-b p-2">
			<h3 class="font-semibold text-gray-800 md:text-base">Name Nachname</h3>
			<p class="text-sm font-medium text-gray-400 md:text-base">Rolle</p>
		</div>

		<div class="">
			<nav class="flex w-full flex-col flex-wrap">
				<ul class="space-y-4">
					<li>
						<RouterLink
							class="flex items-center gap-x-3 rounded-lg p-2 text-base text-slate-900 hover:bg-gray-200"
							to="/administration"
							active-class="font-semibold"
							@click="emit('close')"
						>
							<ClipboardCheckIcon
								class="h-4 w-4 text-gray-900 md:h-5 md:w-5"
							/>
							<h4>Reservierungen</h4>
						</RouterLink>
					</li>

					<li>
						<RouterLink
							class="flex w-full items-center gap-x-3 rounded-lg p-2 text-base text-slate-900 hover:bg-gray-200"
							to="/"
							active-class="font-semibold"
							@click="emit('close')"
						>
							<HomeIcon class="h-4 w-4 text-gray-900 md:h-5 md:w-5" />
							<h4>Dashboard</h4>
						</RouterLink>
					</li>

					<li class="">
						<RouterLink
							class="flex w-full items-center gap-x-3 rounded-lg p-2 text-base text-slate-900 hover:bg-gray-200"
							to="/search"
							active-class="font-semibold"
							@click="emit('close')"
						>
							<SearchIcon class="h-4 w-4 text-gray-900 md:h-5 md:w-5" />
							<h4>Suche</h4>
						</RouterLink>
					</li>
					<li>
						<CategoryDiscloure></CategoryDiscloure>
					</li>
				</ul>
			</nav>
		</div>

		<!-- <div class="fixed inset-x-0 bottom-4 space-y-2 p-2 text-sm">
				<RouterLink
					class="flex w-full items-center gap-x-3 rounded-lg border-gray-900 p-2 text-slate-900 hover:bg-gray-200 md:text-base"
					to="#"
					active-class="font-semibold"
					@click="closeSidebar"
				>
					<UserIcon class="h-4 w-4 text-gray-900 md:h-5 md:w-5" /><span
						>Profil</span
					>
				</RouterLink>
				<RouterLink
					class="flex w-full items-center gap-x-3 rounded-lg border-gray-900 p-2 text-slate-900 hover:bg-gray-200 md:text-base"
					to="/categories"
					active-class="font-semibold"
					@click="closeSidebar"
				>
					<LogoutIcon class="h-4 w-4 text-gray-900 md:h-5 md:w-5" />
					<span>Ausloggen</span>
				</RouterLink>
			</div> -->
	</div>
</template>
