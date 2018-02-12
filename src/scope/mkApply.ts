import {
  Expression,
  EvalFunction,
  Scope,
  LookupFunction,
} from '../types';

const mkApply = (lookup: LookupFunction): EvalFunction => (
  (e: Expression): Expression => {
    if (typeof e === 'symbol') {
      return [];
    }

    const [x = Symbol.for(''), ...xs] = e as Array<Expression>;
    const f = lookup(x as symbol);

    if (f) {
      return f(...xs);
    }

    return [];
  }
);

export default mkApply;
