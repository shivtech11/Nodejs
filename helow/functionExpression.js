//Normal Function
function sayHii() {
    console.log("Hi");
}

sayHii(); //calling is similar for both functions

//function Expression
var sayBye = function() {
    console.log("Bye");
};

sayBye();

//calling function for function expression
function callFunction(fun) {
    fun();
}

callFunction(sayBye);