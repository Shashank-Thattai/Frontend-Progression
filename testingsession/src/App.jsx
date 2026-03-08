import React from "react";
import ThemeProvider from "./Components/useContext/Theme/ThemeProvider";
import NavBar from "./Components/useContext/Authentication/NavBar";
import Dashboard from "./Components/useContext/Authentication/Dashboard";
import LoginForm from "./Components/useContext/Authentication/LoginForm";
//import Userprofile from './Components/useContext/Application/Userprofile';
//import NotificationBell from './Components/useContext/Application/NotificationBell';
//import NotificationList from './Components/useContext/Application/NotificationList';

import Userprofile from "./Components/useContext/ApplicationSplit/Userprofile";
import NotificationBell from "./Components/useContext/ApplicationSplit/NotificationBell";
import NotificationList from "./Components/useContext/ApplicationSplit/NotificationList";
import ShoppingCart from "./Components/UseReducer/ShoppingCart/ShoppingCart";
import RegistrationForm from "./Components/UseReducer/Multi-Step Form/RegistrationForm";

const App = () => {
  //const{user} = useAuth();
  return (
    <>
      {/*<ThemeProvider/>*/}

      {/*<NavBar/>

{user?<Dashboard/>:<LoginForm/>}*/}

      {/*<Userprofile/>
<NotificationBell/>
<NotificationList/>*/}
      {/*<ShoppingCart/>*/}

      <RegistrationForm />
    </>
  );
};

export default App;
