import { ExpressionDefinition } from './types';
import astToExpression from '../parse/astToExpression';

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
