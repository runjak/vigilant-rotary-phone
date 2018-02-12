import { ExpressionDefinitions } from '../types';
import parse from '../parse';

export default {
  'null.': parse(`(
    defun null. (x)
    (eq x '())
  )`),
} as ExpressionDefinitions;
