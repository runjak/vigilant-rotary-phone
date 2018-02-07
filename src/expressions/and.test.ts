import definition from './and';
import astToExpression from '../parse/astToExpression';

describe('and.', () => {
  it('should evaluate to t if both are truthy', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'and.',
        ['atom', ['quote', 'a']],
        ['eq', ['quote', 'a'], ['quote', 'a']],
      ]),
    ];

    const expected = Symbol.for('t');
  });

  it('should evaluate to () if one is falsy', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'and.',
        ['atom', ['quote', 'a']],
        ['eq', ['quote', 'a'], ['quote', 'b']],
      ]),
    ];

    const expected = [];
  });
});
