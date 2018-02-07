import { ExpressionDefinition } from './types';
import astToExpression from '../parse/astToExpression';

export default {
  'assoc.': astToExpression([
    'defun', 'assoc.', ['x', 'y'],
    [
      'cond',
      [['eq', ['caar', 'y'], 'x'], ['cadar', 'y']],
      [['quote', 't'], ['assoc.', 'x', ['cdr', 'y']]],
    ],
  ]),
} as ExpressionDefinition;
