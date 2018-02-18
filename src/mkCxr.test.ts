import { EvalFunction } from './types';
import mkCxr, { cxrRegex } from './mkCxr';

describe('mkCxr', () => {
  describe('cxrRegex', () => {
    it('should match given examples', () => {
      const examples = [
        {
          example: 'car',
          expected: 'a',
        },
        {
          example: 'cdr',
          expected: 'd',
        },
        {
          example: 'cadr',
          expected: 'ad',
        },
        {
          example: 'caddr',
          expected: 'add',
        },
        {
          example: 'cdar',
          expected: 'da',
        },
        {
          example: 'caar',
          expected: 'aa',
        },
        {
          example: 'cadar',
          expected: 'ada',
        },
      ];

      examples.forEach(({ example, expected }) => {
        const [example_, actual] = Array.from(cxrRegex.exec(example) || []);

        expect(example_).toEqual(example);
        expect(actual).toEqual(expected);
      });
    });

    it('should not match counter examples', () => {
      const counterExamples = [
        'cr',
        'caa',
        'cdd',
        'aar',
        'dadr',
        '',
        'zcar',
        'cadri',
      ];

      counterExamples.forEach((counterExample) => {
        const actual = cxrRegex.exec(counterExample);

        expect(actual).toBeNull();
      });
    });
  });

  describe('mkCxr()', () => {
    const a = Symbol.for('a');
    const b = Symbol.for('b');
    const c = Symbol.for('c');
    const d = Symbol.for('d');
    const e = Symbol.for('e');

    const testData = [[a, b], [c, d], e];

    it('should create a working cadr', () => {
      const cadr = mkCxr(Symbol.for('cadr')) as EvalFunction;

      expect(cadr(testData)).toEqual([c, d]);
    });

    it('should create a working caddr', () => {
      const caddr = mkCxr(Symbol.for('caddr')) as EvalFunction;

      expect(caddr(testData)).toEqual(e);
    });

    it('should create a working cdar', () => {
      const cdar = mkCxr(Symbol.for('cdar')) as EvalFunction;

      expect(cdar(testData)).toEqual([b]);
    });

    it('should not create a zool', () => {
      const actual = mkCxr(Symbol.for('zool'));

      expect(actual).toBeNull();
    });
  });
});
