// any & unknown
var exampleAny;
var exampleUnknown;
exampleAny = 123;
exampleAny = 'hello';
exampleUnknown = 123;
exampleUnknown = 'world';
// exampleAny.cy.ber.soft.a.ca.de.my.ty.scr.ipt.soft;
var anySetBool = exampleAny;
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown == 'boolean') {
    var unknownSetBool = exampleUnknown;
}
function log(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
log(123.456);
log('hello world');
