import { ExpressionDefinition } from '../types';
import andDefinition from './and';
import appendDefinition from './append';
import assocDefinition from './assoc';
import evalDefinition from './eval';
import notDefinition from './not';
import nullDefinition from './null';
import pairDefinition from './pair';

export default {
  ...andDefinition,
  ...appendDefinition,
  ...assocDefinition,
  ...evalDefinition,
  ...notDefinition,
  ...nullDefinition,
  ...pairDefinition,
} as ExpressionDefinition;
