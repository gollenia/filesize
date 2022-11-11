type FileSize = {
	value: number;
	unit: 'byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terrabyte';
};

type Units = ('byte' | 'kilobyte' | 'megabyte' | 'gigabyte' | 'terrabyte')[];

const fileSize = (bytes: number): FileSize => {
	const thresh = 1024;

	const size: FileSize = {
		value: bytes,
		unit: 'byte',
	};

	if (Math.abs(bytes) < thresh) return { value: bytes, unit: 'byte' };

	const units: Units = ['kilobyte', 'megabyte', 'gigabyte', 'terrabyte'];
	let u: number = -1;
	const r: number = 10 ** 1;

	do {
		bytes /= thresh;
		++u;
	} while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);

	size.value = bytes;
	size.unit = units[u];
	return { value: bytes, unit: units[u] };
};

export default fileSize;
