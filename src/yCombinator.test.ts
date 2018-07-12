import yCombinator from './yCombinator';


describe('yCombinator', () => {
  it('should enable recursion for faculty calculation', () => {
    const fac = yCombinator(
        (f: (x: number) => number) => (n: number): number => (
        n === 0 ? 1 : n * f(n-1)
      ),
    );

    const expected = [1, 1, 2, 6, 24, 120];
    const actual = [0, 1, 2, 3, 4, 5].map(fac);

    expect(actual).toEqual(expected);
  });
});