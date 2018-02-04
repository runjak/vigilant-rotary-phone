
interface Scope {
  [label: string]: any,
}

type Expression = Symbol | Cons;
interface Cons extends Array<Expression> {}

const quote = (e: Expression): Expression => e;

const t = Symbol.for('t');

const atom = (maybeAtom: Expression): Expression =>
  (maybeAtom instanceof Symbol) ? t : [];

// FIXME Is more generic than P.H. OK here?
const eq = (x: Expression, y: Expression): Expression => (x === y) ? t : [];

// FIXME better exceptions pls?
const car = (xs: Expression): Expression => {
  if(xs instanceof Symbol) {
    throw 'No car for Symbols!';
  }

  if(xs.length === 0) {
    throw 'Insuficcient length in car!';
  }

  return xs[0];
};

// FIXME better exceptions pls?
const cdr = (xs: Expression): Expression => {
  if(xs instanceof Symbol) {
    throw 'No cdr for Symbols!';
  }

  const [x, ...rest] = xs;
  return rest;
};

// FIXME better exceptions pls?
const cons = (x: Expression, xs: Expression): Expression => {
  if(xs instanceof Symbol) {
    throw 'Cannot cons to Symbol!';
  }

  return [x, ...xs];
}
