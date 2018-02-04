import { Expression, EvalFunction } from './types';

export type ReplaceFunction = EvalFunction;

const replace = (original: Expression, replacement: Expression): ReplaceFunction => {
  const doReplace = (e: Expression): Expression => {
    if (e === original) {
      return replacement;
    }

    if (typeof e === 'symbol') {
      return e;
    }

    return (e as Array<Expression>).map(doReplace);
  };

  return doReplace;
};

export default replace;
