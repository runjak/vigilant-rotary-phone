import astToExpression from './astToExpression';

describe('astToExpression', () => {
  it('should turn a string into a symbol', () => {
    const expected = Symbol.for('foo');
    const actual = astToExpression('foo');

    expect(actual).toBe(expected);
  });

  it('should leave empty arrays intact', () => {
    expect(astToExpression([])).toEqual([]);
  });

  it('should handle nested structures', () => {
    const testData = [
      ['a', 'b'],
      ['c', ['d', 'e']],
      'f',
    ];

    const expected = [
      [Symbol.for('a'), Symbol.for('b')],
      [Symbol.for('c'), [Symbol.for('d'), Symbol.for('e'),]],
      Symbol.for('f'),
    ];
    const actual = astToExpression(testData);

    expect(actual).toEqual(expected);
  });
});
