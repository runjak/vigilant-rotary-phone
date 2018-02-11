import definition from './pair';
import parse from '../parse';

describe('pair.', () => {
  it('should correctly pair two lists', () => {
    const test = [
      ...Object.values(definition),
      parse(`(
        pair.
        '(x y z)
        '(a b c)
      )`),
    ];

    const expected = parse(`(
      (x a)
      (y b)
      (z c)
    )`);
  });
});
