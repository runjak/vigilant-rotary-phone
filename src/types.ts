export type Expression = Symbol | Cons;
export interface Cons extends Array<Expression> {};

export type EvalFunction = (...expressions: Array<Expression>) => Expression;

export type LookupResult = EvalFunction | Expression | null;

export type LookupFunction = (s: symbol) => LookupResult;

export type FunctionDefinitions = {
  [name: string]: EvalFunction,
};

export type ExpressionDefinitions = {
  [name: string]: Expression,
};

export type Scope = {
  functionDefinitions: FunctionDefinitions,
  expressionDefinitions: ExpressionDefinitions,
};
