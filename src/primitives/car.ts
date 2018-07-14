import { Expression, Cons } from '../types';

export const ERROR_CAR_OF_SYMBOL = Symbol.for('ERROR_CAR_OF_SYMBOL');
export const ERROR_CAR_OF_EMPTY_LIST = Symbol.for('ERROR_CAR_OF_EMPTY_LIST');

const car = (e: Expression): Expression => {
  if(typeof e === 'symbol') {
    return ERROR_CAR_OF_SYMBOL;
  }

  const xs = e as Cons;

  if(xs.length === 0) {
    return ERROR_CAR_OF_EMPTY_LIST;
  }

  return xs[0];
};

export default car;
