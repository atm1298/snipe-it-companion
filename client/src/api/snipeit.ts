import { ref } from "vue";

export interface SnipeitAsset {
	id: number;
	name: string;
	serial: string;
	image: string;
	location: { name: string };
	status_label: { id: number; name: string };
	custom_fields: { value: string }[];
}

const options = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};
export async function fetchSnipeIT(path: string) {
	return fetch(import.meta.env.VITE_SERVER_URL + path, options).then(res => res.json());
}

export async function fetchAssetById(id: number) {
	const data = await fetchSnipeIT("/assets/" + id);

	const asset = ref<SnipeitAsset>(data.asset);
	const details = ref<{ title: string; description: string }[]>(
		Object.entries(data.asset.custom_fields)
			.map(array => ({
				title: array[0],
				description: array[1].value,
			}))
			.filter(detail => detail.description.length !== 0)
	);

	asset.value.name = asset.value.name.split(/&[gl]t;/g)[0];

	return {
		asset,
		details,
	};
}
