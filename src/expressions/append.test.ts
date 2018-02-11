import definition from './append';
import parse from '../parse';

describe('append.', () => {
  it('should append two lists', () => {
    const test = [
      ...Object.values(definition),
      parse(`(append.
        '(a b)
        '(c d)
      )`),
    ];

    const expected = parse(`(a b c d)`);
  });

  it('should append to the empty list', () => {
    const test = [
      ...Object.values(definition),
      parse(`(append.
        '()
        '(c d)
      )`),
    ];

    const expected = parse(`(c d)`);
  });
});
