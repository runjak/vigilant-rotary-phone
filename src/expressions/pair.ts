import { ExpressionDefinition } from './types';
import astToExpression from '../parse/astToExpression';
import andDefinitions from './and';

export default {
  ...andDefinitions,
  'pair.': astToExpression([
    'defun', 'pair.', ['x', 'y'],
    [
      'cond',
      [
        [
          'and.',
          ['null.', 'x'],
          ['null.', 'y'],
        ],
        ['quote', []],
      ],
      [
        [
          'and.',
          ['not.', ['atom', 'x']],
          ['not.', ['atom', 'y']],
        ],
        [
          'cons',
          ['list', ['car', 'x'], ['car', 'y']],
          ['pair.', ['cdr', 'x'], ['cdr', 'y']],
        ],
      ],
    ],
  ]),
} as ExpressionDefinition;
