import subst, { partialSubst } from './subst';

describe('subst', () => {
  const a = Symbol.for('a');
  const b = Symbol.for('b');
  const c = Symbol.for('c');

  const testData = [
    a, c,
    [],
    [b, a, [c, a, c]],
  ];
  const substitutedData = [
    b, c,
    [],
    [b, b, [c, b, c]],
  ];

  describe('partialSubst()', () => {
    const replacer = partialSubst(b, a);

    it('should replace a symbol with another', () => {
      expect(replacer(a)).toBe(b);
    });

    it('should not replace a wrong symbol', () => {
      expect(replacer(c)).toBe(c);
    });

    it('should replace in nested expressions', () => {
      const actual = replacer(testData);

      expect(actual).toEqual(substitutedData);
    });
  });

  describe('subst()', () => {
    it('should work like partialSubst', () => {
      const actual = subst(b, a, testData);

      expect(actual).toEqual(substitutedData);
    });

    it('should not replace inside replacement', () => {
      const actual = subst([a, a], a, [a]);
      const expected = [[a, a]];

      expect(actual).toEqual(expected);
    });
  });
});
