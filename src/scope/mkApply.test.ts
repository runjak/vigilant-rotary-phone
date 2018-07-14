import parse from '../parse';
import mkApply from './mkApply';
import { Cons, EvalFunction, Expression, LookupResult } from '../types';

describe('apply', () => {
  it('should behave like id for symbols', () => {
    const apply = mkApply(() => { throw new Error('Nope!'); });
    const original = Symbol('magic');

    expect(apply(original)).toBe(original);
  });

  it('should return [] for a symbol not found by lookup', () => {
    const apply = mkApply(() => null);

    const actual = apply(parse('(+ 1 2)'));

    expect(actual).toEqual([]);
  });

  it('should apply the function found as expected', () => {
    const apply = mkApply((s) => {
      expect(s).toBe(Symbol.for('+'));

      return (x, y) => (Number(Symbol.keyFor(x as symbol)) + Number(Symbol.keyFor(y as symbol))) as any;
    });

    const actual = apply(parse('(+ 2 3)'));

    expect(actual).toBe(5)
  });

  it('should handle nested expressions', () => {
    const testExpression = parse('((+ 2) 3 5 7)');

    const apply = mkApply((s: Expression): LookupResult => {
      if(s === Symbol.for('+')) {
        return (x: Expression) => (...ys: Array<Expression>): Cons => (
          ys.map(
            y => (
              Symbol.for(String(
                Number(Symbol.keyFor(x as symbol)) + Number(Symbol.keyFor(y as symbol))
              ))
            )
          )
        );
      }

      throw new Error('should not happen!');
    });

    const expected = parse('(5 7 9)');
    const actual = apply(testExpression);

    expect(actual).toEqual(expected);
  });
});
