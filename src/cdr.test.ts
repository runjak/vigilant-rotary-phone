import cdr, { ERROR_NO_CDR_FOR_SYMBOL } from './cdr';

describe('cdr', () => {
  it('should return ERROR_NO_CDR_FOR_SYMBOL given a Symbol', () => {
    const actual = cdr(Symbol('wtf'));

    expect(actual).toBe(ERROR_NO_CDR_FOR_SYMBOL);
  });

  it('should return the tail of an array', () => {
    const cases = [
      { given: [], expected: []},
      { given: ['foo'], expected: []},
      { given: [2,3,5,7], expected: [3,5,7]},
    ];

    cases.forEach((c) => {
      const { given, expected } = c;

      expect(cdr(given as any)).toEqual(expected);
    });
  });
});
