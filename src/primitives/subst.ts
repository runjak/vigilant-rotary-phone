import { Expression, Cons } from '../types';

type Rewrite = (e: Expression) => Expression;

export const partialSubst = (replacement: Expression, original: Expression): Rewrite => {
  const doSubst = (e: Expression): Expression => {
    if (e === original) {
      return replacement;
    }

    if (typeof e === 'symbol') {
      return e;
    }

    return (e as Cons).map(doSubst);
  };

  return doSubst;
};

const subst = (replacement: Expression, original: Expression, e: Expression): Expression => (
  partialSubst(replacement, original)(e)
);

export default subst;
