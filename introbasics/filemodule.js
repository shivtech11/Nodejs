const fs = require('fs');

// //synchronous
// //read
// var dataByte = fs.readFileSync('fileone.txt');
//var dataText = fs.readFileSync('fileone.txt', 'utf8');
// //write
// fs.writeFileSync("write.txt", dataText);
// fs.writeFileSync("write1.txt", dataByte); //???????????????????How 
// //copy data from one to another
// fs.copyFileSync("fileone.txt", "filetwo.txt");
// console.log(dataByte);
// console.log(dataText);

//asynchronous that means it runs in background without effecting next code
fs.readFile('fileone.txt', 'utf8', function(err, data) {
    // fs.writeFile('writeMe.txt', data);//not working
    const fsPromises = require('fs').promises
    fsPromises.writeFile('writeMe.txt', data);

    console.log(data);
});

console.log("HI Boy");