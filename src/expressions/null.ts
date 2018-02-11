import { ExpressionDefinition } from './types';
import parse from '../parse/index';

export default {
  'null.': parse(`(
    defun null. (x)
    (eq x '())
  )`),
} as ExpressionDefinition;
