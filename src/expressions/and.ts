import { ExpressionDefinition } from './types';
import parse from '../parse/index';

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
