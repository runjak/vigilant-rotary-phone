import { Expression, Cons } from '../types';

export const ERROR_NO_CDR_FOR_SYMBOL = Symbol.for('ERROR_NO_CDR_FOR_SYMBOL');

const cdr = (xs: Expression): Expression => {
  if(typeof xs === 'symbol') {
    return ERROR_NO_CDR_FOR_SYMBOL;
  }

  const [x, ...rest] = xs as Cons;
  return rest;
};

export default cdr;
