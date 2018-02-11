import definition from './eval';
import parse from '../parse';

describe('eval.', () => {
  it('should evaluate lambda of a lambda', () => {
    const testData = parse(`(
      lambda (f) (f '(b c))
      '(lambda (x) (cons 'a x))
    )`);

    const expected = parse('(a b c)');
  });
});
