<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import BaseCheckbox from "../components/BaseCheckbox.vue";
</script>

<template>
	<div class="flex min-h-full w-full items-center justify-center p-2">
		<div class="w-full max-w-md space-y-8">
			<div>
				<img
					class="mx-auto h-20 w-auto"
					src="../components/icons/logo_uni_siegel.png"
					alt="Workflow"
				/>
				<h2 class="mt-6 text-center text-3xl font-semibold text-gray-900">
					Anmeldung
				</h2>
			</div>
			<form class="mt-8 space-y-6" action="#" method="POST">
				<input type="hidden" name="remember" value="true" />
				<div class="-space-y-px rounded-md shadow-sm">
					<div>
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autocomplete="email"
							class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
							placeholder="E-mail Adresse"
						/>
					</div>
					<div>
						<label for="password" class="sr-only">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
							placeholder="Passwort"
						/>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="flex items-center">
						<BaseCheckbox></BaseCheckbox>
						<label
							for="remember-me"
							class="ml-2 block text-base text-gray-900"
						>
							Angemeldet bleiben
						</label>
					</div>

					<div class="text-base">
						<a href="#" class="font-medium text-gray-600 hover:text-gray-500">
							Passwort vergessen?
						</a>
					</div>
				</div>

				<div class="flex justify-center">
					<RouterLink to="/"
						><BaseButton theme="primary" class="w-full"
							>Mit IDM Account einloggen</BaseButton
						>
					</RouterLink>
				</div>
			</form>
		</div>
	</div>
</template>
