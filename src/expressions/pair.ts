import { ExpressionDefinition } from '../types';
import parse from '../parse';
import andDefinitions from './and';

export default {
  ...andDefinitions,
  'pair.': parse(`(
      defun pair. (x y)
      (cond
        (
          (and.
            (null. x)
            (null. y)
          )
          '()
        )
        (
          (and.
            (not. (atom x))
            (not. (atom y))
          )
          (cons
            (list (car x) (car y))
            (pair. (cdr x) (cdr y))
          ))
      )
    )`),
} as ExpressionDefinition;
