import map from 'lodash/map';

import { EvalFunction } from '../types';
import parse from '../parse';

import defaultScope from './default';
import mkLookup from './mkLookup';

describe('mkLookup', () => {
  describe('with default scope', () => {
    const lookup = mkLookup(defaultScope);

    it('should return null where Symbol.keyFor is empty', () => {
      const testData = [
        Symbol('foo'),
        Symbol.for(''),
      ];

      testData.forEach((testSymbol) => {
        expect(lookup(testSymbol)).toBeNull();
      });
    });

    it('should lookup functionDefinitions', () => {
      const { functionDefinitions } = defaultScope;

      map(functionDefinitions, (func, key) => {
        expect(lookup(Symbol.for(key))).toBe(func);
      });
    });

    it('should lookup expressionDefinitions', () => {
      const { expressionDefinitions } = defaultScope;

      map(expressionDefinitions, (expression, key) => {
        expect(lookup(Symbol.for(key))).toBe(expression);
      })
    });

    it('should lookup generated cadar', () => {
      const testData = parse('((a b) d)');
      const cadar = lookup(Symbol.for('cadar')) as EvalFunction;

      expect(cadar).not.toBeNull();

      expect(cadar(testData)).toBe(Symbol.for('b'));
    });

    it('should return null for unknown symbols', () => {
      expect(lookup(Symbol.for('zalgo'))).toBeNull();
    });
  });

  describe('with custom scopes', () => {
    it('should evaluate all generators but return the first non null', () => {
      const testSymbol = Symbol.for('zalgo');
      const actionLog = [] as any;
      const lookup = mkLookup({
        ...defaultScope,
        evalFunctionGenerators: [
          (x) => {
            expect(x).toBe(testSymbol);
            actionLog.push('x');
            return null;
          },
          (y) => {
            expect(y).toBe(testSymbol);
            actionLog.push('y');
            return Symbol.for('y') as any;
          },
          (z) => {
            expect(z).toBe(testSymbol);
            actionLog.push('z');
            return Symbol.for('z') as any;
          },
        ],
      });

      const actual = lookup(testSymbol);

      expect(actual).toBe(Symbol.for('y'));
      expect(actionLog).toEqual(['x', 'y', 'z']);
    });
  });
});
