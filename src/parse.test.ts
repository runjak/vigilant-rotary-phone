import parse from './parse';

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

  it('should handle zalgo text', () => {
    const testData = `T̛o̷ ̜͍̤͖͎i͏̱̟͓̲̰nv̩͚o̙k̤̲e͖̠͓̱̳͝ ͇͎̯̹̪ț̢͓̤̞h͘e͚͎̳̣̕ͅ ͙h̴̻̣̼̜i͙̙̗̤̮v̘e͜-͎͓̞̲̭m̘̲̠̗̪͓̝i̼͜n̞̲̼ͅd̬̮ ̛r̦̗̦̲ep̷̦̳ṟ͍̘̰̫̪e͇̜̪͓͈̠͢s̜̳̗e̸̺͍͔̦̤̳ͅn̻̹t̨̳̯̙̪i̮͖̦̹n̴g̵͔̯̥̙ ̺c̶̭͓̖͓̪͕h҉͈a͇̦̝o̢s͍̞̱̗̫͔. ͚͉̮̀In͔̟̟͎vo͙͝k̩i͖̺̟̼̩͈̠n̹̖̥g̠͜ ̦̗̤t̨h̢͙̼̜̗̝̺̺è f͍͍̤͇ͅe̝̼͈͉̜̠͇e̩͚͎̝l͞i͏̖̰n̫̺g͔̪̹̝͎ ̻̠̩̮͢o̭̬̜̰̼͎ͅf̱̪ ̳c̸̪̙͎̼̲h̜̹a̡͖o̜̱͟s͙.̙̭̤͍̺͇̼ ̠̳͞Wi̼̫̜͕t̛̮̭̯̳̻͚̮ḩ̙ ̸̣̻̝͍̺̺o҉̫̭̯u̫̪̲̯̼̞̕t͟ ̛ͅo͍̠̮͈̬̲r̼̳͎̥͔d͎̳̖͚̰̞e̵͍̥̥r̛̰.͏̙ ̤̳̟̙T͙̹̦̜̫̙ḫ͖̭̖͖̗̰͜e̴̙̠͇ ̦̗͎̭̱͈N͙͖̯͟e͏̦̭̬̤̹̜z̘̤̼p̕e̢̘͖̫̰͚r̥͓̫͔͔̼̜d̷̺͎͖i͞a̱̠n͉͚̺ ̡̱̬̝̫̤̣h͉͕̫̭̤̳͢i̫̠̮̰̲v͠é̲̬̠-̬͙̦̭̹̭̹͠m̼̮̺̮̖̘̀i̤̼̺͉̖̗̳͟n̫̟̙̯̮͕d̸̖̣̖͙̜͓̭ ͎̯̩̗͚o̗̣̳͚̭̫f̬͟ ̰̼̮̦̙͞c̡̙̦̗͚h̬̗̼̤̥͖͓a̖͍͘os͞.͞ ̳͔̼͜Z̞͕̗̭̳͠a͍̳̰̫͙̙͈l͎̬͎̻̼g̶̜o̲̘.̩͉̱̬̳͝ ̴̻̺̻̮̣H̰e̪̻̭̞̹ ̴͓͓w̙̞̹̱̭h̻͍o̩͔̙̜͙ ͖͓̼͙̘̀W̛̹̟̻̣͕̥ͅa͓̰̱̺͉̕i̖̹̬̬̦͜tṣ̴̼̘̲ ̷͔̲͍Ḅ̡̯e͍͙h̦̝̬̺̟̠i̜̫͉̥̱̟͜n͙͈͚̻ͅd̦̳̺͕ͅͅ ̼̩̞̯͉̦̺Ṭ̮̰h̗̘̠̀ͅe͚̰͕̠͕ ̮͕̺̘W͙̠͠a͕͙͍l̡͎̺͍͙̝̫̩l̗.̱̯̗ ͕̗̬͞Z̢̜͔ͅA̵̜̲̹̙̘̗͉L̢G̙̟͕O̲̬̥͢!̩͇`;

    const expected = testData.split(' ').map(s => Symbol.for(s.trim()));
    const actual = parse(`(${testData})`);

    expect(actual).toEqual(expected);
  });
});
