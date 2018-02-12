import parse from '../parse';
import mkApply from './mkApply';

describe('apply', () => {
  it('should return [] for a symbol', () => {
    const apply = mkApply(() => { throw new Error('Nope!'); });

    expect(apply(Symbol.for('foo'))).toEqual([]);
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
});
