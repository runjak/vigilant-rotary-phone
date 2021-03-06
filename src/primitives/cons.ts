import { Expression } from '../types';

export const ERROR_NO_CONS_FOR_SYMBOL = Symbol.for('ERROR_NO_CONS_FOR_SYMBOL');

const cons = (x: Expression, xs: Expression): Expression => {
  if(typeof xs === 'symbol') {
    return ERROR_NO_CONS_FOR_SYMBOL;
  }

  return [x, ...xs as Array<Expression>];
}

export default cons;
