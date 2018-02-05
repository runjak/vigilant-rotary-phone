import label from './label';

describe('label', () => {
  it('should replace a label as expected', () => {
    const f = Symbol.for('f');
    const x = Symbol.for('x');
    const l = Symbol.for('label');

    const testData = [f, [x, f]];

    const fReplacement = [l, f, testData];
    const expected = [fReplacement, [x, fReplacement]];

    const actual = label(f, testData);

    expect(actual).toEqual(expected);
  });
});
