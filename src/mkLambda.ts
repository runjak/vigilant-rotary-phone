import zipWith from 'lodash/zipWith';

import { Expression, EvalFunction } from './types';
import { partialSubst } from './primitives/subst';

export type LambdaFunction = (parameters: Array<Symbol>, expression: Expression, inputs?: Array<Expression>) => Expression;

const mkLambda = (evaluate: EvalFunction): LambdaFunction => {
  const lambda = (parameters: Array<Symbol>, expression: Expression, inputs?: Array<Expression>): Expression => {
    if (!inputs) {
      return (...deferredInputs: Array<Expression>) => lambda(parameters, expression, deferredInputs);
    }

    const replacers: Array<EvalFunction> = zipWith(
      parameters,
      inputs,
      (parameter: Symbol, input: Expression): EvalFunction => {
        if (input === undefined) {
          return x => x;
        }

        return partialSubst(evaluate(input), parameter);
      },
    );

    const combinedReplacer = replacers.reduce(
      (acc: EvalFunction, replacer: EvalFunction): EvalFunction => (
        (e: Expression) => (replacer(acc(e)))
      ),
      (x: Expression): Expression => x,
    );

    return evaluate(combinedReplacer(expression));
  };

  return lambda;
};

export default mkLambda;
