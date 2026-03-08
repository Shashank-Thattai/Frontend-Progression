import { createContext, useContext } from "react";

export var UserContext  = createContext();

export default function useConsole(){
  var Console = useContext(UserContext);
  return Console;
}