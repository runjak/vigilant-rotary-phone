import { ExpressionDefinition } from './types';
import astToExpression from '../parser/astToExpression';

export default {
  'append.': astToExpression([
    'defun', 'append.', ['x', 'y'],
    [
      'cond',
      [['null.', 'x'], 'y'],
      [
        ['quote', 't'],
        ['cons', ['car', 'x'], ['append.', ['cdr', 'x'], 'y']],
      ],
    ]
  ]),
} as ExpressionDefinition;
