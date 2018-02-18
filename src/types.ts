export type Expression = Symbol | Cons;
export interface Cons extends Array<Expression> {};

export type EvalFunction = (e: Expression) => Expression;

export type ExpressionFunction = (...expressions: Array<Expression>) => Expression;

export type LookupResult = ExpressionFunction | Expression | null;

export type LookupFunction = (s: symbol) => LookupResult;

export type FunctionDefinitions = {
  [name: string]: ExpressionFunction,
};

export type ExpressionDefinitions = {
  [name: string]: Expression,
};

export type Scope = {
  functionDefinitions: FunctionDefinitions,
  expressionDefinitions: ExpressionDefinitions,
};
