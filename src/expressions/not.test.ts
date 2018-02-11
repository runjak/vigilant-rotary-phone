import definition from './not';
import parse from '../parse/index';

describe('not.', () => {
  it('should return () for a truthy input', () => {
    const test = [
      ...Object.values(definition),
      parse(`(not. (eq 'a 'a))`),
    ];

    const expected = [];
  });

  it('should return t for a falsy input', () => {
    const test = [
      ...Object.values(definition),
      parse(`(not. (eq 'a 'b))`),
    ];

    const expected = Symbol.for('t');
  });
});
