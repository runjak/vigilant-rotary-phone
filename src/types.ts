export type Expression = Symbol | Cons;
export interface Cons extends Array<Expression> {};

export type EvalFunction = (e: Expression) => Expression;

export type ExpressionFunction = (...expressions: Array<Expression>) => Expression;

export type LookupFunction = (s: symbol) => ExpressionFunction | null;

export type FunctionDefinitions = {
  [name: string]: ExpressionFunction,
};

export type ExpressionDefinition = {
  [name: string]: Expression,
};

export type Scope = {
  functionDefinitions: FunctionDefinitions,
};
