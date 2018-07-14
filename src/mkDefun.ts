import { Expression, EvalFunction, LookupResult } from './types';

export type DefunFunction = (
  identifier: Symbol,
  parameters: Expression,
  expression: Expression,
) => LookupResult;

const mkDefun = (evaluate: EvalFunction): DefunFunction => (
  (identifier: Symbol, parameters: Expression, expression: Expression): LookupResult => (
    evaluate([
      Symbol.for('label'),
      identifier,
      [Symbol.for('lambda'), parameters, expression],
    ])
  )
);

export default mkDefun;
