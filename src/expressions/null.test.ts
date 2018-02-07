import definition from './null';
import astToExpression from '../parse/astToExpression';

describe('null.', () => {
  it('should evaluate to () for an atom', () => {
    const test = [
      ...Object.values(definition),
      astToExpression(['null.', ['quote', 'a']]),
    ];

    const expected = [];
  });

  it('should evaluate to t given () list', () => {
    const test = [
      ...Object.values(definition),
      astToExpression(['null.', ['quote', []]]),
    ];

    const expected = Symbol.for('t');
  });
});
