import { createContext } from "react";
import { useContext } from "react";

export var UserContext = createContext();


export default function useTheme(){
  var Theme = useContext(UserContext);
    return Theme;
}