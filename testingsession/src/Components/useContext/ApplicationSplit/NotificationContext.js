import { createContext, useContext } from "react";

export var UserContext  = createContext();

export default function useNotification(){
  var Notification = useContext(UserContext);
  return Notification;
}