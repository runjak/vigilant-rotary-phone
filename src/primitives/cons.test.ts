import cons, { ERROR_NO_CONS_FOR_SYMBOL } from './cons';

describe('cons', () => {
  it('should return ERROR_NO_CONS_FOR_SYMBOL given a Symbol as second parameter', () => {
    const actual = cons(Symbol('foo'), Symbol('bar'));

    expect(actual).toBe(ERROR_NO_CONS_FOR_SYMBOL);
  });

  it('should cons to a given array', () => {
    const x = Symbol('foo');
    const xs = [Symbol('bar')];

    const actual = cons(x, xs);
    const expected = [x, ...xs];

    expect(actual).toEqual(expected);
  });
});
