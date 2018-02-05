import definition from './append';
import astToExpression from '../parser/astToExpression';

describe('append.', () => {
  it('should append two lists', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'append.',
        ['quote', ['a', 'b']],
        ['quote', ['c', 'd']],
      ]),
    ];

    const expected = astToExpression(['a', 'b', 'c', 'd']);
  });

  it('should append to the empty list', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'append.',
        ['quote', []],
        ['quote', ['c', 'd']],
      ]),
    ];

    const expected = astToExpression(['c', 'd']);
  });
});
