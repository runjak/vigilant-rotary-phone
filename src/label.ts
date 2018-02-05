import { Expression } from './types';
import subst from './subst';

const label = (identifier: Symbol, expression: Expression): Expression => {
  return subst(
    [Symbol.for('label'), identifier, expression],
    identifier,
    expression,
  );
};

export default label;
