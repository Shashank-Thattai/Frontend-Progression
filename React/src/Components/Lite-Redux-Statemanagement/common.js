import { useReducer } from "react";
import { createContext,useContext } from "react";

//Reducer

    //Reducer store

    //reducer function
    
    /*export function reducer(state,action){
        return {...state, age:50}
    }*/

     export function reducer(state,action){
        switch(action.type){
            case 'change':
                return {...state, userName:action.payload.userName,age:action.payload.age}
            case 'increment':
                return{...state,age:state.age+1}
            default:
                return {...state, age:50}
        }
        

    }







    //reducer useReducer() hook

    //in my ui using callback method with dispatch with type and value so state is changed

//Context Done
export var UserDataContext = createContext();

export var initialState = {
    userName: "Raj",
    age:20,
    gender: "Male"

}

//Custom Hook
 export function useUserData(){
    var userData = useContext(UserDataContext)
    console.log("context data")
    console.log(userData)
//look into the .state
    return userData.state
}
//Custom Hook
export function useUserDispatcher(){
    var userData = useContext(UserDataContext)
//look into the .dispatch
    return  userData.dispatch
}




