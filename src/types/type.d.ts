// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIfEmpty = any;

interface ProjectItem {
	id?: string;
	name?: string;
	url?: string;
	description?: string;
	icon?: StaticImageData;
	tags?: string[];
}
