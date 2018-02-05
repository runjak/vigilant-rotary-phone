import definition from './asssoc';
import astToExpression from '../parser/astToExpression';

describe('assoc.', () => {
  it('should lookup an element from a list of pairs', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'assoc.', ['qoute', 'x'],
        [
          [['quote', 'y'], ['quote', 'b']],
          [['quote', 'x'], ['quote', 'a']],
          [['quote', 'z'], ['quote', 'c']],
        ],
      ]),
    ];

    const expected = Symbol.for('a');
  });

  it('should lookup the first element from a list of pairs', () => {
    const test = [
      ...Object.values(definition),
      astToExpression([
        'assoc.', ['qoute', 'x'],
        [
          [['quote', 'x'], ['quote', 'new']],
          [['quote', 'x'], ['quote', 'a']],
          [['quote', 'y'], ['quote', 'b']],
        ],
      ]),
    ];

    const expected = Symbol.for('new');
  });
});
