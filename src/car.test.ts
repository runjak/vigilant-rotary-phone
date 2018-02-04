import car, { ERROR_CAR_OF_SYMBOL, ERROR_CAR_OF_EMPTY_LIST } from './car';

describe('car', () => {
  it('should return ERROR_CAR_OF_SYMBOL given a Symbol', () => {
    const actual = car(Symbol('wtf'));

    expect(actual).toBe(ERROR_CAR_OF_SYMBOL);
  });

  it('should return ERROR_CAR_OF_EMPTY_LIST given []', () => {
    const actual = car([]);

    expect(actual).toBe(ERROR_CAR_OF_EMPTY_LIST);
  });

  it('should return the first element of an array', () => {
    const xs = [Symbol('first'), Symbol('second')];

    const actual = car(xs);
    expect(actual).toBe(xs[0]);
  });
});
