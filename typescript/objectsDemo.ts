//Contracts can be given by->
//type | interface

//Interface is a structure that defines the shape of an object
interface UserDetailsModel{
    name:string,
    age:number,
    isAdmin:boolean,
    address:string | {
        street:string
    };
    hobbies?:string[];//optional property when theres a ?
    passportNumber ?:number
    displayDetails?():void;//optional method
}
//This interface merges with the other interfaces created with the same name(UserDetailsModel)
interface UserDetailsModel{
    userCurrentLocation:string;
    //Cannot make age a string because its already been defined a a number
    //age:string;
}

var a:number =23;

var userDetails: UserDetailsModel={
    name: 'raj',
    age:20,
    isAdmin:true,
    address:"123 drive",
    passportNumber:123,//optional property/value,
    displayDetails(){
        console.log(`Name:${this.name}`)
    },
    userCurrentLocation:"here"
}

console.log(userDetails)
console.log(typeof(userDetails))

var userDetails1 ={
    name: 'rajj',
    age:22,
    isAdmin:true

}

var userDetails3 ={
    name: 'rajjjjjj',
    age:23,
    isAdmin:false

}

console.log(userDetails)

interface CollegeDetails{
    collegeid:string;
    collegename:string;


}

interface UniversityDetails{
    universityid:string;
    universityname:string;

}
interface  StudentDetails extends UniversityDetails,CollegeDetails{
    userID:String;
    userName:string;
}

var user:StudentDetails ={
    //Need all the properties from all the interfacets which have been extended to the StudentDetails interface
}
