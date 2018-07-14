import {
  Expression,
  Cons,
  EvalFunction,
  Scope,
  LookupFunction,
  LookupResult,
} from '../types';
import yCombinator from '../yCombinator';

const mkApply = (lookup: LookupFunction): EvalFunction => 
  yCombinator((self: EvalFunction) => (e: Expression): LookupResult => {
    if (typeof e === 'symbol') {
      return e;
    }

    const [x = Symbol.for(''), ...xs] = e as Cons;

    if (typeof x === 'symbol') {
      const f = lookup(x as symbol);

      if (typeof f === 'function') {
        return f(...xs);
      }
    }

    if (Array.isArray(x)) {
      const y = self(x);

      if (typeof y === 'function') {
        return (y as EvalFunction)(...xs);
      }

      return y;
    }

    if (typeof x === 'function') {
      return x(...xs);
    }

    return [];
  });

export default mkApply;
