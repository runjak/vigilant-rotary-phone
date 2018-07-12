import {
  Scope,
  LookupFunction,
  LookupResult,
} from '../types';

const mkLookup = (scope: Scope): LookupFunction => (
  (s: symbol): LookupResult => {
    const key = Symbol.keyFor(s) as string;

    if (!key) {
      return null;
    }

    if (key in scope.functionDefinitions) {
      return scope.functionDefinitions[key];
    }

    if (key in scope.expressionDefinitions) {
      return scope.expressionDefinitions[key];
    }

    const [generatedFunction = null] = scope.evalFunctionGenerators
      .map(generator => generator(s))
      .filter(f => f !== null);

    if (generatedFunction !== null) {
      return generatedFunction;
    }

    return null;
  }
);

export default mkLookup;
