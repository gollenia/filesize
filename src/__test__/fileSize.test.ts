import fileSize from '..';

test('File Size', () => {
  expect(fileSize(1024)).toStrictEqual({ unit: 'kilobyte', value: 1 });
});

test('File Size physical', () => {
  expect(fileSize(1000, true)).toStrictEqual({ unit: 'kilobyte', value: 1 });
});
