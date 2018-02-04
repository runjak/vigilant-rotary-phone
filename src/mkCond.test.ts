import mkCond, { ERROR_COND_ON_SYMBOL } from './mkCond';

describe('mkCond', () => {
  describe('with id as evaluate', () => {
    const cond = mkCond(x => x);

    it('should return [] given no arguments', () => {
      expect(cond()).toEqual([]);
    });

    it('should return [] given an empty array', () => {
      expect(cond([])).toEqual([]);
    });

    it('should return ERROR_COND_ON_SYMBOL given a symbol', () => {
      const actual = cond(Symbol('wtf') as any);

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

  describe('with a custom evaluate function', () => {
    const p = Symbol('truthy predicate');
    const expectedSymbol = Symbol('expected action');
    const cond = mkCond((x) => {
      if(x === Symbol.for('p')) {
        return Symbol.for('t');
      }

      if(x === Symbol.for('e')) {
        return expectedSymbol;
      }

      return x;
    });

    it('should evaluate predicate and action', () => {
      const testData = [
        [],
        [Symbol('foo'), Symbol('bar')],
        [Symbol.for('p'), Symbol.for('e')],
      ];

      const actual = cond(...testData);

      expect(actual).toBe(expectedSymbol);
    });
  });
});
