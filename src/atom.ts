import { Expression } from './index';

const t = Symbol.for('t');

const atom = (maybeAtom: Expression): Expression =>
  (maybeAtom instanceof Symbol) ? t : [];

export default atom;
