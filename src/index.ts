
interface Scope {
  [label: string]: any,
}

type Expression = Symbol | Cons;
interface Cons extends Array<Expression> {}
