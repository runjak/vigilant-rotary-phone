export type Expression = Symbol | Cons;
export interface Cons extends Array<Expression> {}

export type EvalFunction = (e: Expression) => Expression;
