//Global varibales
// console.log(__dirname);
// console.log("\n" + __filename + "\n");


//timeout function
// setTimeout(function() {
//     console.log("HI");
// }, 2000);

// var time = 0;
// setInterval(function() {
//     time += 2;
//     console.log(time + "seconds have passed");
// }, 2000);


var time = 0;
var timer = setInterval(function() {
    time += 2;
    console.log(time + "seconds have passed");
    if (time > 7) {
        clearInterval(timer);
    }
}, 2000);