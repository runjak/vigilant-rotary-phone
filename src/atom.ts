import { Expression } from './types';

const t = Symbol.for('t');

const atom = (maybeAtom: Expression): Expression =>
  (typeof maybeAtom === 'symbol') ? t : [];

export default atom;
