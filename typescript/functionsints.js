//sample function
//Syntax for function is ->
//function functionName(parameter1:type1,parameter2:type2):returnType{}
function displayUserInfo(name, age) {
    console.log(" name is ".concat(name, " age is ").concat(age));
}
console.log(displayUserInfo("Alice", 30));
function displayAddress(doornum, streetname, pincode) {
    if (doornum === void 0) { doornum = 230; }
    console.log(" doornum is ".concat(doornum, " streetname is ").concat(streetname));
}
console.log(displayAddress(200, "123"));
//Making it an arrow function
var displayAddress1 = function (doornum, streetname, pincode) {
    if (doornum === void 0) { doornum = 230; }
    console.log(" doornum is ".concat(doornum, " streetname is ").concat(streetname));
};
