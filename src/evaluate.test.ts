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

  it('should evaluate cond expressions', () => {
    const exp = parse(`(cond
      ((eq a b) x)
      ((eq a a) y)
      ((eq b a) z)
    )`);
    const actual = evaluate(exp);

    expect(actual).toBe(Symbol.for('y'));
  });

  it('should evaluate lambda expressions', () => {
    const tExp = parse('(lambda (x y) (eq x y) (a a))');
    const fExp = parse('(lambda (x y) (eq x y) (a b))');

    expect(evaluate(tExp)).toBe(Symbol.for('t'));
    expect(evaluate(fExp)).toEqual([]);
  });

  it('should evaluate defun expressions', () => {
    const tExp = parse(`(
      (defun foo (x y) (eq x y))
      (foo a a)
    )`);
    const fExp = parse(`(
      (defun bar (x y) (eq x y))
      (bar a b)
    )`);

    expect(evaluate(tExp)).toBe(Symbol.for('t'));
    expect(evaluate(fExp)).toEqual([]);
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