export type Expression = Symbol | Cons | EvalFunction;
export interface Cons extends Array<Expression> {};

export type EvalFunction = (...expressions: Array<Expression>) => Expression;

export type LookupResult = Expression | null;

export type LookupFunction = (s: symbol) => LookupResult;

export type EvalFunctionGenerator = (s: Symbol) => EvalFunction | null;

export type FunctionDefinitions = {
  [name: string]: EvalFunction,
};

export type ExpressionDefinitions = {
  [name: string]: Expression,
};

export type Scope = {
  functionDefinitions: FunctionDefinitions,
  expressionDefinitions: ExpressionDefinitions,
  evalFunctionGenerators: Array<EvalFunctionGenerator>,
};
