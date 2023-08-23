import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain='dev-aa1evovs25d3qzmr.us.auth0.com'
    clientId='R3oiHcEtnkdG6fARPCjtFeOjjGj3N8CG'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
