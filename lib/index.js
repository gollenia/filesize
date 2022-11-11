"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSize = (bytes) => {
    const thresh = 1024;
    let size = {
        value: bytes,
        unit: 'byte'
    };
    if (Math.abs(bytes) < thresh)
        return { value: bytes, unit: 'byte' };
    const units = ['kilobyte', 'megabyte', 'gigabyte', 'terrabyte'];
    let u = -1;
    const r = Math.pow(10, 1);
    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);
    size.value = bytes;
    size.unit = units[u];
    return { value: bytes, unit: units[u] };
};
exports.default = fileSize;
