import definition from './null';
import parse from '../parse/index';

describe('null.', () => {
  it('should evaluate to () for an atom', () => {
    const test = [
      ...Object.values(definition),
      parse(`(null. 'a)`),
    ];

    const expected = [];
  });

  it('should evaluate to t given () list', () => {
    const test = [
      ...Object.values(definition),
      parse(`(null. '())`),
    ];

    const expected = Symbol.for('t');
  });
});
