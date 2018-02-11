export type Expression = Symbol | Cons;
export interface Cons extends Array<Expression> {};

export type EvalFunction = (e: Expression) => Expression;

export type FunctionDefinitions = {
  [name: string]: (...expressions: Array<Expression>) => Expression,
};

export type ExpressionDefinition = {
  [name: string]: Expression,
};
