import atom from './atom';

describe('atom', () => {
  it('should return Symbol.for("t") for Symbols', () => {
    const actual = atom(Symbol('unique test symbol'));

    expect(actual).toBe(Symbol.for('t'));
  });

  it('should return the empty array otherwise', () => {
    const nonSymbols = [
      42,
      "foo",
      null,
      undefined,
      [],
    ];

    nonSymbols.forEach((nonSymbol) => {
      const actual = atom(nonSymbol as any);

      expect(actual).toEqual([]);
    });
  });
});
