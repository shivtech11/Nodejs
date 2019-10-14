var fs = require('fs');

//fs.unlink('writeMe.txt');  //not working??

//synchronous
//fs.mkdirSync('stuff');
//fs.rmdirSync('stuff');

//ajax
// fs.mkdir('stufff', function() {
//     fs.readFile('writeMe.txt', 'utf8', function(err, data) {
//         fs.writeFileSync('./stuff/writeNotAjax.txt', data);
//     console.log(data);
//  });
// });


// //delete file and folder using asynchronous  //not working properly???
// fs.unlink('./stuff/writeNotAjax.txt', function() {
//     fs.rmdir('stuff');
// });

//converting text into two d array file
fs.readFile('writeMe.txt', 'utf8', function(err, data) {
var email=[], allemails=["","","",""];var n=0;
for(var i=0;i<data.length;i++){
if(data[i]!=","){
    email+=data[i]
}
else{
    allemails[n]+=email;
     email="";
    n++;
  }  
}
 console.log(allemails);
});