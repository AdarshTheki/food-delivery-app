import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import AppProvider from "./context.jsx";
import { StrictMode } from "react";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </StrictMode>
);
