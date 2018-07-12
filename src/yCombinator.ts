const yCombinator = (f: Function) => (
  x => x(x)
)(
  (x: Function) => f((y: any) => x(x)(y))
);

export default yCombinator;