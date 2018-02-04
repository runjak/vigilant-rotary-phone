import eq from './eq';

describe('eq', () => {
  it('should return t for equal items', () => {
    const testSymbol = Symbol('unique test symbol');

    const actual = eq(testSymbol, testSymbol);
    expect(actual).toBe(Symbol.for('t'));
  });

  it('sould return [] otherwise', () => {
    const a = Symbol('a');
    const b = Symbol('b');

    const actual = eq(a, b);
    expect(actual).toEqual([]);
  });
});
