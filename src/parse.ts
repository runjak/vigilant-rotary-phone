import * as peg from 'pegjs';

const grammar = `
Expression "S-Expression"
  = List
  / Quote
  / Symbol

List "list"
  = _ "(" xs:(_ Expression _)* ")" _ { return xs.map(ys => ys[1]); }

Quote "quote"
  = "'" xs:Expression { return [Symbol.for('quote'), xs] }

Symbol "symbol"
  = _ xs:[^ \\t\\n\\r()]+ _ { return Symbol.for(xs.join('')); }

_ "whitespace"
  = [ \\t\\n\\r]*
`;

export default peg.generate(grammar).parse;
