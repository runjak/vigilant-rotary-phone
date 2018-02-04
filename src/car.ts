import { Expression } from './index';

export const ERROR_CAR_OF_SYMBOL = Symbol.for('ERROR_CAR_OF_SYMBOL');
export const ERROR_CAR_OF_EMPTY_LIST = Symbol.for('ERROR_CAR_OF_EMPTY_LIST');

const car = (xs: Expression): Expression => {
  if(xs instanceof Symbol) {
    return ERROR_CAR_OF_SYMBOL;
  }

  if(xs.length === 0) {
    return ERROR_CAR_OF_EMPTY_LIST;
  }

  return xs[0];
};

export default car;
