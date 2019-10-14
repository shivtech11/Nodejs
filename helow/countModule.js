////1 simple module creating
// var counter = function(arr) {
//     return 'There are ' + arr.length + ' elements in this array';
// };
// //creating module 
// //module.exports = counter;  //for single file module  or in file only one function is present

// var adder = function(a, b) {
//     return `The sum of two numbers ${a} and ${b} is ${a+b}`;
// };
// const PIE = 3.142;
// //for pattern module
// module.exports.counter = counter; //for particular function in file module
// module.exports.adder = adder;
// module.exports.pie = PIE;


// //or 2 in short lines creating modules directly
// module.exports.counter = function(arr) {
//     return 'There are ' + arr.length + ' elements in this array';
// };
// module.exports.adder = function(a, b) {
//     return `The sum of two numbers ${a} and ${b} is ${a+b}`;
// };
// module.exports.pie = 3.142;

//or 3  creating modules by creating module object
var counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
};
var adder = function(a, b) {
    return `The sum of two numbers ${a} and ${b} is ${a+b}`;
};
const PIE = 3.142;

//module object
module.exports = {
    counter: counter,
    adder: adder,
    pie: PIE
};