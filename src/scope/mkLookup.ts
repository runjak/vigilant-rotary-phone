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

    return null;
  }
);

export default mkLookup;
