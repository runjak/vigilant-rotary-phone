import { ExpressionDefinition } from '../types';
import parse from '../parse';

export default {
  'not.': parse(`(
    defun not. (x)
    (cond
      (x '())
      ('t 't)
    )
  )`),
} as ExpressionDefinition;
