import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ChakraProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ChakraProvider>
  // </React.StrictMode>
);
