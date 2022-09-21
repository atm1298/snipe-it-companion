<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import BaseCheckbox from "../components/BaseCheckbox.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseRadio from "../components/BaseRadio.vue";
</script>

<template>
	<div class="flex flex-col gap-6 p-4 md:flex-row md:gap-8 md:p-8">
		<div
			class="flex h-min flex-col border-b pb-4 md:gap-4 md:border-b-0 md:border-r md:pr-8"
		>
			<div class="mb-4">
				<h1>Persönliche Informationen</h1>
				<p>Daten des LDAP-Systems</p>
			</div>
			<div>
				<form action="#" method="POST">
					<div class="overflow-hidden">
						<div class="grid gap-4 md:grid-cols-2">
							<BaseInput>Vornme</BaseInput>
							<BaseInput>Nachname</BaseInput>
							<BaseInput>Matrikelnummer</BaseInput>
							<BaseInput>E-Mail</BaseInput>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="flex flex-col">
			<div class="mb-4">
				<h1>Benachrichtigungen</h1>
				<p class="text-gray-600">
					Entscheide, welche Mitteilungen Du erhalten möchten und wie.
				</p>
			</div>
			<div>
				<form action="#" method="POST">
					<div class="overflow-hidden">
						<div class="space-y-4">
							<fieldset>
								<legend class="sr-only">Per E-Mail</legend>
								<div class="mb-3" aria-hidden="true">Per E-Mail</div>
								<div class="flex items-start">
									<div class="flex h-4 items-center">
										<BaseCheckbox></BaseCheckbox>
									</div>
									<div class="ml-3">
										<label for="comments">Erinnerungen</label>
										<p class="text-gray-500">
											Lasse Dich benachrichtigen, wenn eine
											Reservierungen ansteht.
										</p>
									</div>
								</div>
								<div class="flex items-start">
									<div class="flex h-5 items-center">
										<BaseCheckbox></BaseCheckbox>
									</div>
									<div class="ml-3">
										<label for="candidates">??</label>
										<p class="text-gray-500">???</p>
									</div>
								</div>
								<div class="flex items-start">
									<div class="flex h-5 items-center">
										<BaseCheckbox></BaseCheckbox>
									</div>
									<div class="ml-3">
										<label for="offers" class="">??</label>
										<p class="text-gray-500">??</p>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend class="contents0">Push Benachrichtigungen</legend>
								<p class="text-gray-500">
									Diese werden direkt auf deinem Smartphone angezeigt.
								</p>
								<div class="mt-4 space-y-4">
									<BaseRadio>Alles</BaseRadio>
									<BaseRadio>Wie bei E-Mail</BaseRadio>
									<BaseRadio>Keine Push-Benachrichtigungen</BaseRadio>
								</div>
							</fieldset>
						</div>
						<div class="px-4 py-3 text-right sm:px-6">
							<BaseButton theme="primary" type="submit">
								Speichern</BaseButton
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
