import { ExpressionDefinition } from './types';
import astToExpression from '../parser/astToExpression';

export default {
  'not.': astToExpression([
    'defun', 'not.', ['x'],
    [
      'cond',
      ['x', ['quote', []]],
      [['quote', 't'], ['quote', 't']],
    ],
  ]),
} as ExpressionDefinition;
