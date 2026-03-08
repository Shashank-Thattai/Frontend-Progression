import { createContext, useContext } from "react";

export var UserContext = createContext();

export default function useAuth(){
    var Auth = useContext(UserContext);
    return Auth;

}