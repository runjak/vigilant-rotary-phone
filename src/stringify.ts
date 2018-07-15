import { Expression, Cons } from './types';

const stringify = (e: Expression): string => {
  if (!e) {
    return '_';
  }

  if (typeof e === 'symbol') {
    return Symbol.keyFor(e) as string;
  }

  if (typeof e === 'function') {
    return String(e);
  }

  const parts = (e as Cons).map(stringify);

  return `(${parts.join(' ')})`;
};

export default stringify;