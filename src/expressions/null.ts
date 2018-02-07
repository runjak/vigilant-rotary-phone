import { ExpressionDefinition } from './types';
import astToExpression from '../parse/astToExpression';

export default {
  'null.': astToExpression([
    'defun', 'null.', ['x'],
    ['eq', 'x', ['quote', []]],
  ]),
} as ExpressionDefinition;
