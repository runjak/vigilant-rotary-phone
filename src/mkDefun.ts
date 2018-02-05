import { Expression, EvalFunction } from './types';

export type DefunFunction = (
  identifier: Symbol,
  parameters: Expression,
  expression: Expression,
) => Expression;

const mkDefun = (evaluate: EvalFunction): DefunFunction => (
  (identifier: Symbol, parameters: Expression, expression: Expression): Expression => (
    evaluate([
      Symbol.for('label'),
      identifier,
      [Symbol.for('lambda'), parameters, expression],
    ])
  )
);

export default mkDefun;
