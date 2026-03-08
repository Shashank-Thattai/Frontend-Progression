

function addValue(a1:number,a2:number):number{
    var result:number;
    result =a1+a2;
    return result;
}

//Arrow function
/*var addValue = (a1:number,a2:number):number => {
    var result:number;
    result =a1+a2;
    return result;
}*/

var sum:number = addValue(3,2);
console.log("The sum is"+sum)

//Not returning anything use :void
/*function addValue(a1:number,a2:number):void{
    var result:number;
    result =a1+a2;
    return result;
}*/
