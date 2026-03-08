//sample function

//Syntax for function is ->
//function functionName(parameter1:type1,parameter2:type2):returnType{}

function displayUserInfo(name:string,age:number):void{
    console.log(` name is ${name} age is ${age}`)

}
console.log(displayUserInfo("Alice",30))

function displayAddress(doornum:number =230,streetname:string,pincode?:string):void{
    console.log(` doornum is ${doornum} streetname is ${streetname}`)

}
console.log(displayAddress(200,"123"))

//Making it an arrow function
var  displayAddress1 = (doornum:number =230,streetname:string,pincode?:string):void =>{
    console.log(` doornum is ${doornum} streetname is ${streetname}`)
}