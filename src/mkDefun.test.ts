import mkDefun from './mkDefun';

describe('mkDefun', () => {
  const f = Symbol.for('f');
  const parameters = [
    Symbol.for('x'),
    Symbol.for('y'),
    Symbol.for('z'),
  ];
  const e = Symbol.for('e');
  const expected = [
    Symbol.for('label'),
    f,
    [
      Symbol.for('lambda'),
      parameters,
      e,
    ],
  ];

  it('should create the expected structure', () => {
    const defun = mkDefun(x => x);

    const actual = defun(f, parameters, e);

    expect(actual).toEqual(expected);
  });

  it('should evaluate the expected structure', () => {
    let evaluated = Symbol('wtf');
    const defun = mkDefun((x) => {
      evaluated = x as any;
      return Symbol.for('t');
    });

    const actual = defun(f, parameters, e);

    expect(actual).toBe(Symbol.for('t'));
    expect(evaluated).toEqual(expected);
  });
});
