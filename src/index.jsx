import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {ThemeProvider} from "./Context/ThemeContext"

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-center" reverseOrder={false} />
    </BrowserRouter>
  </ThemeProvider>
);
