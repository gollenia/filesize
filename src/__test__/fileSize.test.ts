import fileSize from "..";

test('File Size', () => {
	expect(fileSize(1024)).toStrictEqual({ unit: 'kilobyte', value: 1 })
})