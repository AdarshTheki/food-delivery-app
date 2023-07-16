import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain='dev-aa1evovs25d3qzmr.us.auth0.com'
    clientId='js7FOE8NHLxR6HGWZoAgoPtEtVri3Fvs'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>
);
