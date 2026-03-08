// in javascript
// var a = [23,'raj']
var data;
var userAges;
userAges = [2, 3, 4, 5];
userAges.push(34);
userAges.pop();
//find,map,filter,reduce,forEach,sort can be used
//var seconddata:(number|String)[] = [45,'kumar',true]
var isFeepaid;
isFeepaid = 1;
isFeepaid = true;
//With readonly values cannot be modified
var accountNumbers = [1, 2, 3];
userAges.forEach(function (item) {
    console.log(item);
});
// dimentional arrays
var twoDarray = [
    [1, 2, 3],
    [3, 4, 5]
];
//Tuples -> It is a fixed length array, with specified data types for each index
var address = [123, 'string', "string2"];
console.log(typeof (address));
console.log(address.length);
