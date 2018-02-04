import cond, { ERROR_COND_ON_SYMBOL } from './cond';

describe('cond', () => {
  it('should return [] given no arguments', () => {
    expect(cond()).toEqual([]);
  });

  it('should return [] given an empty array', () => {
    expect(cond([])).toEqual([]);
  });

  it('should return ERROR_COND_ON_SYMBOL given a symbol', () => {
    const actual = cond(Symbol('wtf'));

    expect(actual).toBe(ERROR_COND_ON_SYMBOL);
  });

  it('should return second value, given a predicate is t', () => {
    const testData = [Symbol.for('t'), Symbol('wanted')];

    const actual = cond(testData);
    expect(actual).toBe(testData[1]);
  });

  it('should work with multiple predicates', () => {
    const testData = [
      [Symbol('wtf'), Symbol('unwanted')],
      [Symbol.for('t'), Symbol('wanted')],
      [[], Symbol('unwanted')],
    ];

    const actual = cond(...testData);
    const expected = testData[1][1];

    expect(actual).toBe(expected);
  });
});
