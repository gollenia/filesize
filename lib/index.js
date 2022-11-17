"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSize = (bytes, physical = false) => {
    const threshold = physical ? 1000 : 1024;
    const size = {
        value: bytes,
        unit: 'byte',
    };
    if (Math.abs(bytes) < threshold)
        return size;
    const units = ['kilobyte', 'megabyte', 'gigabyte', 'terrabyte', 'petabyte', 'exabyte'];
    let u = -1;
    const r = Math.pow(10, 1);
    do {
        bytes /= threshold;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= threshold && u < units.length - 1);
    size.value = bytes;
    size.unit = units[u];
    return { value: bytes, unit: units[u] };
};
exports.default = fileSize;
