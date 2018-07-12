import parse from './parse';
import andExpression from './expressions/and';
import stringify from './stringify';

describe('stringify', () => {
  it('should be inverse to parse', () => {
    const { 'and.': expected } = andExpression;
    const actual = parse(stringify(expected));

    expect(actual).toEqual(expected);
  });

  it('should handle atoms correctly', () => {
    const expected = 'test';
    const actual = stringify(Symbol.for(expected));

    expect(actual).toBe(expected);
  });

  it('should handle the empty list correctly', () => {
    const expected = '()';
    const actual = stringify([]);

    expect(actual).toBe(expected);
  });

  it('should handle simple lists correctly', () => {
    const expected = '(a b c)';
    const actual = stringify(parse(expected));

    expect(actual).toBe(expected);
  });

  it('should stringify nested expressions', () => {
    const expected = '(a (b (c d) e) f)';
    const actual = stringify(parse(expected));

    expect(actual).toBe(expected);
  });
});