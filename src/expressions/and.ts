import { ExpressionDefinition } from './types';
import astToExpression from '../parse/astToExpression';

export default {
  'and.': astToExpression([
    'defun', 'and.', ['x', 'y'],
    [
      'cond',
      [
        'x',
        [
          'cond',
          ['y', ['quote', 't']],
          [['quote', 't'], ['quote', []]],
        ],
      ],
      [['quote', 't'], ['quote', []]],
    ],
  ]),
} as ExpressionDefinition;
