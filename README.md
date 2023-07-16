npm install react-slick

### Auth0 React SDK for Single Page Apps `npm install @auth0/auth0-react`

- How to use the `auth0-react`

  ```jsx
  import { useAuth0 } from "@auth0/auth0-react";
  // In the function destructure the useAuth0() function
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  ```
  - isAuthenticated = return boolean value
  - loginWithRedirect = One time login and redirect to the page
  - user = user full details likes image, name, position etc.
