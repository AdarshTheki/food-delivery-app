import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import AppProvider from "./context.jsx";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
