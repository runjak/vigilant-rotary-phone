import defaultScope from './scope/default';
import mkLookup from './scope/mkLookup';
import mkApply from './scope/mkApply';
import { Expression, EvalFunction } from './types';
import yCombinator from './yCombinator';

import mkDefun from './mkDefun';
import mkCond from './mkCond';
import mkLabel from './mkLabel';
import mkLambda from './mkLambda';

// FIXME abstract into mkEvaluate
const evaluate = yCombinator(
  (self: EvalFunction): EvalFunction =>
    (...expressions: Array<Expression>): Expression => {
      const scope = {
        ...defaultScope,
        functionDefinitions: {
          ...defaultScope.functionDefinitions,
          label: mkLabel(self) as EvalFunction,
          cond: mkCond(self),
          lambda: mkLambda(self) as EvalFunction,
          // defun: mkDefun(self),
        },
      };

      const lookup = mkLookup(scope);
      const apply = mkApply(lookup);

      return apply(...expressions);
    },
);

export default evaluate;