<script setup lang="ts">
import { ChevronRightIcon, CogIcon, MenuIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

import BaseButton from "./BaseButton.vue";

const nav = ref();
const closeSidebar = () => window.HSSideabr.close(nav.value);
</script>

<template>
	<div class="flex justify-end p-2">
		<button
			type="button"
			class="text-gray-500 hover:text-gray-600"
			data-hs-sidebar="#docs-sidebar"
			aria-controls="docs-sidebar"
			aria-label="Toggle navigation"
		>
			<MenuIcon class="h-5 w-5"></MenuIcon>
		</button>
	</div>

	<div
		ref="nav"
		id="docs-sidebar"
		class="hs-sidebar scrollbar-y fixed inset-y-0 right-0 z-[60] hidden w-64 translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white pt-7 pb-10 transition-all duration-300 hs-sidebar-open:translate-x-0 lg:right-auto lg:bottom-0 lg:block lg:translate-x-0"
	>
		<div class="mb-4 px-8">
			<div class="flex w-full flex-row justify-between">
				<h2 class="mb-2 flex-none">Persönliches</h2>
				<CogIcon class="h-6 w-6 text-teal-700"></CogIcon>
			</div>

			<div class="group block flex-shrink-0">
				<div class="flex items-center border-b pb-3">
					<div class="">
						<h3 class="font-semibold text-gray-800">Maria Wanner</h3>
						<p class="text-sm font-medium text-gray-400">maria@gmail.com</p>
					</div>
				</div>
			</div>
		</div>

		<div class="px-8">
			<h2 class="mb-2 flex-none">Menü</h2>
		</div>
		<nav class="flex w-full flex-col flex-wrap px-8">
			<ul class="space-y-5">
				<li>
					<RouterLink
						class="flex w-full items-center justify-between gap-x-3 text-sm text-slate-700 hover:bg-gray-100"
						to="/"
						active-class="font-semibold"
						@click="closeSidebar"
					>
						<span>Startseite</span>
						<ChevronRightIcon class="h-3 w-3 text-teal-700" />
					</RouterLink>
				</li>
				<li>
					<RouterLink
						class="flex items-center justify-between gap-x-3 text-sm text-slate-700 hover:bg-gray-100"
						to="/login"
						active-class="font-semibold "
						@click="closeSidebar"
					>
						<span>Einloggen</span>
						<ChevronRightIcon class="h-3 w-3 text-teal-700" />
					</RouterLink>
				</li>
				<li>
					<RouterLink
						class="flex w-full items-center justify-between gap-x-3 text-sm text-slate-700 hover:bg-gray-100"
						to="/search"
						active-class="font-semibold"
						@click="closeSidebar"
					>
						<span>Suche</span>
						<ChevronRightIcon class="h-3 w-3 text-teal-700" />
					</RouterLink>
				</li>
				<li>
					<RouterLink
						class="flex w-full items-center justify-between gap-x-3 text-sm text-slate-700 hover:bg-gray-100"
						to="/category"
						active-class="font-semibold"
						@click="closeSidebar"
					>
						<span>Kategorie</span>
						<ChevronRightIcon class="h-3 w-3 text-teal-700" />
					</RouterLink>
				</li>
			</ul>
		</nav>
		<div class="fixed inset-x-0 bottom-0 border-gray-300 p-2">
			<BaseButton theme="secondary" class="w-full">Ausloggen</BaseButton>
		</div>
	</div>
</template>
