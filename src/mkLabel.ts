import { Expression, EvalFunction } from './types';
import subst from './primitives/subst';

export type LabelFunction = (
  identifier: Symbol,
  expression: Expression,
) => EvalFunction;

const mkLabel = (evaluate: EvalFunction): LabelFunction => {
  return (identifier: Symbol, expression: Expression): EvalFunction => {
    return (e: Expression): Expression => (
      evaluate(subst(expression, identifier, e))
    );
  };
};

export default mkLabel;
