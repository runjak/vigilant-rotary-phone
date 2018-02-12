import {
  Scope,
  ExpressionFunction,
  LookupFunction,
} from '../types';

const mkLookup = (scope: Scope): LookupFunction => (
  (s: symbol): ExpressionFunction | null => {
    const key = Symbol.keyFor(s) as string;

    if (!key) {
      return null;
    }

    if (key in scope.functionDefinitions) {
      return scope.functionDefinitions[key];
    }

    return null;
  }
);

export default mkLookup;
