import parse from './index';

describe('parse', () => {
  const quote = Symbol.for('quote');
  const foo = Symbol.for('foo');
  const bar = Symbol.for('bar');
  const baz = Symbol.for('baz');

  it('should parse symbols', () => {
    const testData = "foo";

    const expected = foo;
    const actual = parse(testData);

    expect(actual).toEqual(expected);
  });

  it('should parse lists of symbols', () => {
    const testData = '(foo bar baz)';

    const expected = [foo, bar, baz];
    const actual = parse(testData);

    expect(actual).toEqual(expected);
  });

  it('should parse quoted symbols', () => {
    const testData = "'foo";

    const expected = [quote, foo];
    const actual = parse(testData);

    expect(actual).toEqual(expected);
  });

  it('should parse quoted lists', () => {
    const testData = "'(foo bar baz)";

    const expected = [quote, [foo, bar, baz]];
    const actual = parse(testData);

    expect(actual).toEqual(expected);
  });

  it('should parse nested expressions', () => {
    const wat = Symbol.for('wat');
    const testData = "('wat foo '(bar baz) '())";

    const expected = [
      [quote, wat],
      foo,
      [quote, [bar, baz]],
      [quote, []],
    ];
    const actual = parse(testData);

    expect(actual).toEqual(expected);
  });

  it('should handle whitespace around symbols', () => {
    const testData = '\n\tfoo \n\r';

    const expected = foo;
    const actual = parse(testData);

    expect(actual).toEqual(expected);
  });

  it('should handle whitespace around lists', () => {
    const testData = '\r\n()  \t';

    const actual = parse(testData);

    expect(actual).toEqual([]);
  });
});
