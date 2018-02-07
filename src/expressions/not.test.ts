import definition from './not';
import astToExpression from '../parse/astToExpression';

describe('not.', () => {
  it('should return () for a truthy input', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'not.',
        ['eq', ['quote', 'a'], ['quote', 'a']],
      ]),
    ];

    const expected = [];
  });

  it('should return t for a falsy input', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'not.',
        ['eq', ['quote', 'a'], ['quote', 'b']],
      ]),
    ];

    const expected = Symbol.for('t');
  });
});
