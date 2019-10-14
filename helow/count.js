//importing module into variable "./ represents file in same directory"
//var counter = require('./countModule');  //for single function file module
// var arr = ['shiv', 'jaise', 'mine'];
// console.log(counter(arr));

var stuff = require('./countModule'); //for all function file module

console.clear();
console.log(stuff.counter(['shiv', 'jaise', 'mine']));
console.log(stuff.adder(5, 3));
console.log(stuff.pie);
console.log(stuff.adder(stuff.pie, 5));