```js
This new protecting route component acts as abstraction layer for the
whole authorization mechanism to protect certain pages from unauthorized
access. Because we extracted it as reusable component, which can be used
to compose another component (or components) into it, we can extend the
implementation details too. For example, in most cases (here: a user not
being authenticated) we want to redirect a user to a public route (e.g.
'/landing'). However, we can also be specific about the redirected path
by using an optional prop:

const ProtectedRoute = ({
  user,
  redirectPath = "/landing",
  children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
export default ProtectedRoute;
```

```js
We will come back to extending this component when we have to deal with
permissions and roles. For now, we will reuse this component for other
routes which need the same level of protection. For example, the
Dashboard page requires a user to be logged in too, so let's protect
this route:

const [user, setUser] = useState(null);
const handleLogIn = () =>
  setUser({
    id: "1",
    name: "Adarsh",
    permission: ["analyze"],
    role: ["admin"],
  });
const handleLogout = () => setUser(null);
```
