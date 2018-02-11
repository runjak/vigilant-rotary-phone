import definition from './asssoc';
import parse from '../parse';

describe('assoc.', () => {
  it('should lookup an element from a list of pairs', () => {
    const test = [
      ...Object.values(definition),
      parse(`(assoc.
        'x
        (
          ('y 'b)
          ('x 'a)
          ('z 'c)
        )
      )`),
    ];

    const expected = Symbol.for('a');
  });

  it('should lookup the first element from a list of pairs', () => {
    const test = [
      ...Object.values(definition),
      parse(`(assoc.
        'x
        (
          ('x 'new)
          ('x 'a)
          ('y 'b)
        )
      )`),
    ];

    const expected = Symbol.for('new');
  });
});
