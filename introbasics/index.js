console.log("Helow SHIV");

// const square ={
//     area: (a) => (a*a),
//     perimeter: (a)=>(4*a)
// }

const square =require('./square.js');

const calsquare=(a)=>{
    console.log('the value of a is ${a} and area is '+square.area(a));

    console.log('the value of a is ${a} and peri is '+square.perimeters(a));
}

//console.log(_filename);


calsquare(5);