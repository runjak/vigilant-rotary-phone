import { Expression } from './types';
import car from './primitives/car';
import cdr from './primitives/cdr';

export const cxrRegex = /^c([ad]+)r$/;


type Accessor = (...expressions: Array<Expression>) => Expression;
type MaybeAccessor = Accessor | null;

const mkCxr = (name: symbol): MaybeAccessor => {
  const [_, xParts] = Array.from(
    cxrRegex.exec(Symbol.keyFor(name) || '') || [],
  );

  if(xParts === undefined) {
    return null;
  }

  const accessors: Array<MaybeAccessor> = Array.from(xParts).map((xPart) => {
    switch(xPart) {
      case 'a':
        return car;
      case 'd':
        return cdr;
      default:
        return null;
    }
  });

  return accessors.reduce(
    (result: MaybeAccessor, accessor: MaybeAccessor): MaybeAccessor => {
      if (result === null) {
        return accessor;
      }

      if (accessor === null) {
        return result;
      }

      return (e: Expression) => (result(accessor(e)));
    },
    null,
  );
};

export default mkCxr;
