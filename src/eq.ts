import { Expression } from './types';

const t = Symbol.for('t');

// FIXME Is more generic than P.H. OK here?
const eq = (x: Expression, y: Expression): Expression => (x === y) ? t : [];

export default eq;
