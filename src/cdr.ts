import { Expression } from './types';

export const ERROR_NO_CDR_FOR_SYMBOL = Symbol.for('ERROR_NO_CDR_FOR_SYMBOL');

const cdr = (xs: Expression): Expression => {
  if(typeof xs === 'symbol') {
    return ERROR_NO_CDR_FOR_SYMBOL;
  }

  const [x, ...rest] = xs as Array<Expression>;
  return rest;
};

export default cdr;
