import quote from './quote';
import atom from './atom';
import eq from './eq';
import car from './car';
import cdr from './cdr';
import cons from './cons';

export interface Scope {
  [label: string]: any,
}

export const scope: Scope = {
  quote,
  atom,
  eq,
  car,
  cdr,
  cons,
};
