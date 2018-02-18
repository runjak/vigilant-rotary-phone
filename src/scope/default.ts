import { Scope } from '../types';
import functionDefinitions from '../primitives/index';
import expressionDefinitions from '../expressions/index';
import mkCxr from '../mkCxr';

export default {
  functionDefinitions,
  expressionDefinitions,
  evalFunctionGenerators: [
    mkCxr,
  ],
} as Scope;
