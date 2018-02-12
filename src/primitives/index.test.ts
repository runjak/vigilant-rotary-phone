import definitions from './index';

describe('primitives', () => {
  it('should expose functions only as its values', () => {
    Object.values(definitions).forEach((f) => {
      expect(typeof f).toBe('function');
    });
  });
});
