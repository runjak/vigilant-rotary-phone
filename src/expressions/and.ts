import { ExpressionDefinition } from './types';
import parse from '../parse';

export default {
  'and.': parse(`
      (defun
        and.
        (x y)
        (cond
          (x (cond
            (y 't)
            ('t '())
          ))
          ('t '()))
      )

    `),
} as ExpressionDefinition;
