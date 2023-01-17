import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";
import {AppProvider} from "./context/productcontext"
import {FilterContextProvider} from"./context/Filter_Context"
import {CartProvider} from "./context/Cart_Context"
ReactDOMClient.createRoot(document.getElementById("root")).render(
    <AppProvider>
    <FilterContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
