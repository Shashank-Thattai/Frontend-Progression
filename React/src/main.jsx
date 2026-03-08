import React from "react";
import ReactDom from "react-dom/client"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from "react-router-dom";

ReactDom.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App/>
</BrowserRouter>
)