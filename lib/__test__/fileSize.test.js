"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
test('File Size', () => {
    expect((0, __1.default)(1024)).toStrictEqual({ unit: 'kilobyte', value: 1 });
});
test('File Size physical', () => {
    expect((0, __1.default)(1000, true)).toStrictEqual({ unit: 'kilobyte', value: 1 });
});
