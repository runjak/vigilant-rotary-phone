import { ExpressionDefinition } from '../types';
import parse from '../parse';

export default {
  'assoc.': parse(`(
    defun assoc. (x y)
    (cond
      ((eq (caar y) x) (cadar y))
      ('t (assoc. x (cdr y)))
    )
  )`),
} as ExpressionDefinition;
