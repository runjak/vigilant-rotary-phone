import { Expression, Cons } from './types';

const stringify = (e: Expression): string => {
  if (typeof e === 'symbol') {
    return Symbol.keyFor(e) as string;
  }

  const parts = (e as Cons).map(stringify);

  return `(${parts.join(' ')})`;
};

export default stringify;