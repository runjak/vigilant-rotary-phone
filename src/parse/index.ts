import * as peg from 'pegjs';

const grammar = `
Expression "S-Expression"
  = List
  / Quote
  / Symbol

List "list"
  = "(" xs:(_ Expression _)* ")" { return xs.map(ys => ys[1]); }

Quote "quote"
  = "'" xs:Expression { return [Symbol.for('quote'), xs] }

Symbol "symbol"
  = xs:[a-zA-Z]+ { return Symbol.for(xs.join('')); }

_ "whitespace"
  = [ \\t\\n\\r]*
`;

export default peg.generate(grammar).parse;
