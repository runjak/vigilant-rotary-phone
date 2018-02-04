import replace from './replace';

describe('replace', () => {
  const a = Symbol.for('a');
  const b = Symbol.for('b');
  const c = Symbol.for('c');
  const replacer = replace(a, b);

  it('should replace a symbol with another', () => {
    expect(replacer(a)).toBe(b);
  });

  it('should not replace a wrong symbol', () => {
    expect(replacer(c)).toBe(c);
  });

  it('should replace in nested expressions', () => {
    const testData = [
      a, c,
      [],
      [b, a, [c, a, c]],
    ];

    const expected = [
      b, c,
      [],
      [b, b, [c, b, c]],
    ];
    const actual = replacer(testData);

    expect(actual).toEqual(expected);
  });
});
