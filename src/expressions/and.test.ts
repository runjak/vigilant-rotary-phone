import definition from './and';
import parse from '../parse';

describe('and.', () => {
  it('should evaluate to t if both are truthy', () => {
    const test = [
      ...Object.values(definition),
      parse(`(and.
        (atom 'a)
        (eq 'a 'a)
      )`),
    ];

    const expected = Symbol.for('t');
  });

  it('should evaluate to () if one is falsy', () => {
    const test = [
      ...Object.values(definition),
      parse(`(and.
        (atom 'a)
        (eq 'a 'b)
      )`),
    ];

    const expected = [];
  });
});
