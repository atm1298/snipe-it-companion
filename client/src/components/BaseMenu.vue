<script setup lang="ts">
import { SearchIcon } from "@heroicons/vue/outline";
</script>

<template>
	<header
		class="relative z-50 flex w-full flex-wrap bg-white py-4 text-sm sm:flex-nowrap sm:justify-start"
	>
		<nav
			class="mx-auto w-full max-w-[85rem] px-4 sm:flex sm:items-center sm:justify-between"
			aria-label="Global"
		>
			<div class="flex items-center justify-between">
				<RouterLink to="https://www.imis.uni-luebeck.de/de"
					><img
						class="left-15 top-0 h-12"
						src="../components/icons/logo_uni_siegel.png"
						alt="Image Description"
				/></RouterLink>

				<div class="sm:hidden">
					<button
						type="button"
						class="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white"
						data-hs-collapse="#navbar-with-mega-menu"
						aria-controls="navbar-with-mega-menu"
						aria-label="Toggle navigation"
					>
						<svg
							class="h-4 w-4 hs-collapse-open:hidden"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
							/>
						</svg>
						<svg
							class="hidden h-4 w-4 hs-collapse-open:block"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path
								d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div
				id="navbar-with-mega-menu"
				class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block"
			>
				<div
					class="mt-5 flex flex-col gap-5 sm:mt-0 sm:flex-row sm:items-center sm:justify-end sm:pl-5"
				>
					<a
						class="font-medium text-gray-500"
						href="/administration"
						aria-current="page"
						>Verwaltung</a
					>
					<a class="font-medium text-gray-500" href="/" aria-current="page"
						>Dashboard</a
					>
					<a
						class="font-medium text-gray-600 hover:text-gray-400"
						href="/search"
						>Suche</a
					>
					<a
						class="font-medium text-gray-600 hover:text-gray-400"
						href="/categories"
						>Kategorien</a
					>
					<a class="font-medium text-gray-600 hover:text-gray-400" href="/"
						>Profil</a
					>
					<form method="get" action="/assets" class="relative">
						<input
							type="search"
							id="search"
							name="search"
							class="focus:border-gray-20000 block w-full rounded-xl border-gray-50 bg-gray-100 py-3 px-4 pl-11 text-sm focus:z-10 focus:ring-gray-200"
							placeholder="Suche"
						/>
						<div
							class="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center pl-4"
						>
							<SearchIcon class="h-4 w-4 text-gray-400"></SearchIcon>
						</div>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>
