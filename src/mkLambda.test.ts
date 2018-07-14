import parse from './parse';
import mkLambda from './mkLambda';
import { EvalFunction } from './types';

describe('mkLambda', () => {
  const parameters = parse('(a b c)');
  const inputs = parse('(x y z)');
  const [a,b,c] = parameters;
  const [x,y,z] = inputs;

  describe('with id as eval', () => {
    const lambda = mkLambda(x => x);

    it('should return the expression when parameters are empty', () => {
      const e = Symbol('expression');

      const actual = lambda([], e, [Symbol('wtf')]);

      expect(actual).toBe(e);
    });

    it('should replace all parameters', () => {
      const testData = parse('(() (a (b a) c) (b))');

      const expected = parse('(() (x (y x) z) (y))');
      const actual = lambda(parameters, testData, inputs);

      expect(actual).toEqual(expected);
    });

    it('should work if more inputs than parameters are given', () => {
      const testData = parse('(() (a (b a) c) (b))');

      const expected = parse('(() (x (y x) z) (y))');
      const actual = lambda(
        parameters,
        testData,
        [...inputs, Symbol('wtf')],
      );

      expect(actual).toEqual(expected);
    });

    it('should leave parameters without inputs in place', () => {
      const testData = parse('(() (a (b a) c) (b))');

      const expected = parse('(() (x (y x) c) (y))');
      const actual = lambda(parameters, testData, [x,y]);

      expect(actual).toEqual(expected);
    });

    it('should take deferred inputs in case of missing inputs', () => {
      const testData = parse('(a b c)');
      const expected = parse('(x y z)');

      const deferred = lambda(parameters, testData) as EvalFunction;
      const actual = deferred(...inputs);

      expect(actual).toEqual(expected);
    });
  });

  describe('with custom eval', () => {
    it('should apply eval in the correct order', () => {
      const evalLog: Array<any> = [];
      const lambda = mkLambda((x) => {
        evalLog.push(x);

        return x;
      })

      const testData = parse('(() (a (b a) c) (b))');

      const expected = parse(`(
        x y z
        (() (x (y x) z) (y))
      )`);
      lambda(parameters, testData, inputs);

      expect(evalLog).toEqual(expected);
    });
  });
});
