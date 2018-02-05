import { ExpressionDefinition } from './types';
import astToExpression from '../parser/astToExpression';

export default {
  'null.': astToExpression([
    'defun', 'null.', ['x'],
    ['eq', 'x', ['quote', []]],
  ]),
} as ExpressionDefinition;
