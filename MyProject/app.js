var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World 111 !\n');
});

app.get('/mars', function(req, res) {  
  res.send(getMars());
});

app.get('/adds', function(req, res) {  
  res.send(add());
});

app.get('/splice', function(req, res) {  
  res.send(ExampleSplice());
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

function getMars(){
  var obj = {name:"Raja11", age:35};
  return obj;
};

function add () {
  var sum = 12+34;
  return "sum";
}

// understanding splice 
function ExampleSplice() {
  var arr = [1,2,3,4,5];
  return arr.splice(2,3);
}

// map , reduce, slice, push , pop 
// how to declare string, number, boolian
// how to create and initalise an array with intergers and sgttings
// how to create an object with name and age properties
// what are all the methods available in array (javascript ? )
// what is arrow function ? 
