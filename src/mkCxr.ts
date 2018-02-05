import { Expression, EvalFunction } from './types';
import car from './car';
import cdr from './cdr';

export const cxrRegex = /^c([ad]+)r$/;

type MaybeEvalFunction = EvalFunction | null;

const mkCxr = (name: string): MaybeEvalFunction => {
  const [_, xParts] = Array.from(cxrRegex.exec(name) || []);

  if(xParts === undefined) {
    return null;
  }

  const accessors: Array<MaybeEvalFunction> = Array.from(xParts).map((xPart) => {
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
    (result: MaybeEvalFunction, accessor: MaybeEvalFunction): MaybeEvalFunction => {
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