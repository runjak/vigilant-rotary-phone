import { Expression } from './index';

export const ERROR_COND_ON_SYMBOL = Symbol.for('ERROR_COND_ON_SYMBOL');

const t = Symbol.for('t');

const cond = (...es: Array<Expression>): Expression => {
  if(es.length === 0) {
    return es;
  }

  const [e, ...rest] = es;

  if(typeof e === 'symbol') {
    return ERROR_COND_ON_SYMBOL;
  }

  const [predicate, action] = e as Array<Expression>;

  if(predicate === t) { // FIXME eval predicate
    return action; // FIXME eval action
  }

  return cond(...rest);
};

export default cond;
