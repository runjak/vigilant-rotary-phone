import map from 'lodash/map';

import defaultScope from './default';
import mkLookup from './mkLookup';

describe('mkLookup', () => {
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

  it('should return null for unknown symbols', () => {
    expect(lookup(Symbol.for('zalgo'))).toBeNull();
  });
});
