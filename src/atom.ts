import { Expression } from './index';

const t = Symbol.for('t');

const atom = (maybeAtom: Expression): Expression =>
  (typeof maybeAtom === 'symbol') ? t : [];

export default atom;
