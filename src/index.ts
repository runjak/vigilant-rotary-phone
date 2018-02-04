import quote from './quote';
import atom from './atom';
import eq from './eq';
import car from './car';
import cdr from './cdr';
import cons from './cons';

export interface Scope {
  [label: string]: any,
}

export type Expression = Symbol | Cons;
export interface Cons extends Array<Expression> {}

export const scope: Scope = {
  quote,
  atom,
  eq,
  car,
  cdr,
  cons,
};
