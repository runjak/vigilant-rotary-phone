import quote from './quote';

describe('quote', () => {
  it('should return the given parameter', () => {
    const uniqueSymbol = Symbol('quote test symbol');

    expect(quote(uniqueSymbol)).toBe(uniqueSymbol);
  });
});
