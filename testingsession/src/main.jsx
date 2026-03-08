import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AuthProvider from "./Components/useContext/Authentication/AuthProvider";
import AppProvider from "./Components/useContext/Application/AppProvider";
import ConsoleProvider from "./Components/useContext/ApplicationSplit/ConsoleProvider";
import NotificationProvider from "./Components/useContext/ApplicationSplit/NotificationProvider";

ReactDom.createRoot(document.getElementById('root')).render(
<ConsoleProvider>
    <NotificationProvider>
        <App/>
    </NotificationProvider>
</ConsoleProvider>

    

  




)