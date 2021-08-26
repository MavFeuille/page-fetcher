// 2 Command Line arg : URL + local file path (process.argv)
//slice argv and keep 0,1 will be URL and local path
//download resource at URL to local path
// print out file size
//http request wait for response => receive data write in file in fs

//flow:
// request URL -> if not error -> know file size -> download -> print outcome + file size
// file size -- fs.statSync.size (in bytes)

const fs = require("fs");
const request = require('request');
const command = process.argv.splice(2);
// console.log(`Argv = `, command);

const URL = command[0];
const local = command [1];
console.log(`URL= `, URL);
console.log(`local = `, local);



//print file size
const fileSize = function (file) {
  let size = fs.statSync(file).size;
  return size;
};


//write file
const writeFile = function(local, body){
  fs.writeFile(local, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${fileSize} bytes to ${local}`);
  });
};


//request URL file
const download = function(URL) {

  request(URL, (error, response, body) => {
    if (error) return "Error!";
    writeFile(local, body);
  });
};

download(URL);

