import { Expression } from './index';

export const ERROR_NO_CDR_FOR_SYMBOL = Symbol.for('ERROR_NO_CDR_FOR_SYMBOL');

const cdr = (xs: Expression): Expression => {
  if(xs instanceof Symbol) {
    return ERROR_NO_CDR_FOR_SYMBOL;
  }

  const [x, ...rest] = xs;
  return rest;
};

export default cdr;
