import { Expression, EvalFunction } from './types';

export type SubstFunction = EvalFunction;

export const partialSubst = (replacement: Expression, original: Expression): SubstFunction => {
  const doSubst = (e: Expression): Expression => {
    if (e === original) {
      return replacement;
    }

    if (typeof e === 'symbol') {
      return e;
    }

    return (e as Array<Expression>).map(doSubst);
  };

  return doSubst;
};

const subst = (replacement: Expression, original: Expression, e: Expression): Expression => (
  partialSubst(replacement, original)(e)
);

export default subst;
