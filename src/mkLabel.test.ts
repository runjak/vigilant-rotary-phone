import parse from './parse';
import { Expression } from './types';
import mkLabel from './mkLabel';

describe('mkLabel', () => {
  it('should replace a label as expected', () => {
    const label = mkLabel(x => x);
    const testString = '(f (x f))';
    const testData = parse(testString);

    const expected = parse(`(${testString} (x ${testString}))`);
    const actual = label(parse('f'), testData)(testData);

    expect(actual).toEqual(expected);
  });

  it('should incorporate a custom evaluation function', () => {
    const evaluationLog: Array<Expression> = [];
    const evaluate = (x: Expression): Expression => {
      evaluationLog.push(x);
      return x;
    };
    const label = mkLabel(evaluate);

    const expected = parse('y');
    const actual = label(parse('x'), parse('y'))(parse('x'));

    expect(actual).toEqual(expected);
    expect(evaluationLog).toEqual([expected]);
  });
});
