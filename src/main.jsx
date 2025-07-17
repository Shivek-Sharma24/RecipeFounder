import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ContextProvider from "./context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>
);
