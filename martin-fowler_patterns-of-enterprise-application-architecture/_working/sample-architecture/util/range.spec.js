import range from './range.js';

describe('range()', () => {
  test('handles all three arguments', () => {
    const newArray = range(3, 28, 3);
    expect(newArray).toStrictEqual([3, 6, 9, 12, 15, 18, 21, 24, 27]);
  });

  test('handles a single "end" argument', () => {
    const newArray = range(6);
    expect(newArray).toStrictEqual([0, 1, 2, 3, 4, 5]);
  });

  test('handles omitted "step" argument', () => {
    const newArray = range(4, 8);
    expect(newArray).toStrictEqual([4, 5, 6, 7]);
  });
});
