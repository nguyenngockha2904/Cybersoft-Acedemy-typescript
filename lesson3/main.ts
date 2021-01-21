// any & unknown

let exampleAny: any;
let exampleUnknown: unknown;

exampleAny = 123;
exampleAny = 'hello';

exampleUnknown = 123;
exampleUnknown = 'world';
exampleUnknown = true;
// exampleAny.cy.ber.soft.a.ca.de.my.ty.scr.ipt.soft;
let anySetBool: boolean = exampleAny;

if (typeof exampleUnknown == 'string') {
  exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
  let unknownSetBool: boolean = exampleUnknown;
}

function log(value: unknown) {
  if (typeof value == 'number') {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}
log(123.456);
log('hello world');
