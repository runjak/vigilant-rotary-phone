import { ExpressionDefinition } from './types';
import parse from '../parse/index';

export default {
  'append.': parse(`
    (defun append. (x y)
      (cond
        ((null. x) y)
        ('t (
          cons (car x) (append. (cdr x) y)
        ))
      )
    )`),
} as ExpressionDefinition;
