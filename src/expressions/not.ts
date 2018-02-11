import { ExpressionDefinition } from './types';
import parse from '../parse/index';

export default {
  'not.': parse(`(
    defun not. (x)
    (cond
      (x '())
      ('t 't)
    )
  )`),
} as ExpressionDefinition;
