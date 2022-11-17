type FileSize = {
	value: number;
	unit: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terrabyte' | 'petabyte' | 'exabyte';
};

type Units = ('byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terrabyte' | 'petabyte' | 'exabyte')[];

const fileSize = (bytes: number, physical: boolean = false): FileSize => {

	const threshold = physical ? 1000 : 1024;

	const size: FileSize = {
		value: bytes,
		unit: 'byte',
	};

	if (Math.abs(bytes) < threshold) return size;

	const units: Units = ['kilobyte', 'megabyte', 'gigabyte', 'terrabyte', 'petabyte', 'exabyte'];
	let u: number = -1;
	const r: number = 10 ** 1;

	do {
		bytes /= threshold;
		++u;
	} while (Math.round(Math.abs(bytes) * r) / r >= threshold && u < units.length - 1);

	size.value = bytes;
	size.unit = units[u];
	return { value: bytes, unit: units[u] };
};

export default fileSize;
