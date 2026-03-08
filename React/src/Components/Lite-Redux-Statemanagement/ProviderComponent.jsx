import { initialState, UserDataContext } from "./common";
import { reducer } from "./common";
import { useReducer } from "react";

export function ProviderComponent({children}){
    const[state,dispatch] =useReducer(reducer,initialState)
    return (
        <>
        <UserDataContext value ={{state,dispatch}}>
             {children}
        </UserDataContext>
           
        </>
    )
}
