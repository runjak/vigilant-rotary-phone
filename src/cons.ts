import { Expression } from './index';

export const ERROR_NO_CONS_FOR_SYMBOL = Symbol.for('ERROR_NO_CONS_FOR_SYMBOL');

const cons = (x: Expression, xs: Expression): Expression => {
  if(xs instanceof Symbol) {
    return ERROR_NO_CONS_FOR_SYMBOL;
  }

  return [x, ...xs];
}

export default cons;
