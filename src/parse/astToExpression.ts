import { Expression } from '../types';

export type StringAST = string | StringList;
export interface StringList extends Array<StringAST> {};

const astToExpression = (ast: StringAST): Expression => {
  if (typeof ast === 'string') {
    return Symbol.for(ast);
  }

  return (ast as StringList).map(astToExpression);
};

export default astToExpression;
