import { createContext, useContext } from "react";

export var UserContext  = createContext();

export default function useApp(){
  var App = useContext(UserContext);
  return App;
}