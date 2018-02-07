import definition from './pair';
import astToExpression from '../parse/astToExpression';

describe('pair.', () => {
  it('should correctly pair two lists', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'pair.',
        ['quote', ['x', 'y', 'z']],
        ['quote', ['a', 'b', 'c']],
      ]),
    ];

    const expected = astToExpression([
      ['x', 'a'],
      ['y', 'b'],
      ['z', 'c'],
    ]);
  });
});
