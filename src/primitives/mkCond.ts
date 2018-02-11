import { Expression, EvalFunction } from '../types';

export const ERROR_COND_ON_SYMBOL = Symbol.for('ERROR_COND_ON_SYMBOL');

export type CondFunction = (...es: Array<Expression>) => Expression;

const t = Symbol.for('t');

const mkCond = (evaluate: EvalFunction): CondFunction => {
  const cond = (...es: Array<Expression>): Expression => {
    if(es.length === 0) {
      return es;
    }

    const [e, ...rest] = es;

    if(typeof e === 'symbol') {
      return ERROR_COND_ON_SYMBOL;
    }

    const [predicate, action] = e as Array<Expression>;

    if(evaluate(predicate) === t) {
      return evaluate(action);
    }

    return cond(...rest);
  };

  return cond;
};

export default mkCond;
