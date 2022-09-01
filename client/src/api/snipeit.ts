export interface SnipeitAsset {
	id: number;
	name: string;
	serial: string;
	image: string;
	location: { name: string };
	status_label: { id: number; name: string };
	custom_fields: { value: string }[];
}
