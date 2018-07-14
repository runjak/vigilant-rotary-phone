import parse from './parse';
import evaluate from './evaluate';

describe('evaluation', () => {
  it('should evaluate a primitive function', () => {
    const tExp = parse('(eq a a)');
    const fExp = parse('(eq a b)');

    expect(evaluate(tExp)).toBe(Symbol.for('t'));
    expect(evaluate(fExp)).toEqual([]);
  });

  it('should evaluate label expressions', () => {
    const exp = parse('((label a b) (eq a b))');
    const actual = evaluate(exp);

    expect(actual).toBe(Symbol.for('t'));
  });

  // it('should evaluate a parsed expression', () => {
  //   const test = parse('(append. (a b) (c d))');
  //   const expected = parse('(a b c d)');

  //   const actual = evaluate(test);
  //   expect(actual).toEqual(expected);
  // });

  // it('should evaluate a generated function', () => {
  //   expect(true).toBe(false);
  // });

  // it('should handle quotes', () => {
  //   expect(true).toBe(false);
  // });

  // it('should evaluate eval', () => {
  //   expect(true).toBe(false);
  // });
});