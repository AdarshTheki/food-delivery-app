import Footer from "./components/common/Footer";
import "./Navigation.css";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Navigate,
} from "react-router-dom";

import LandingScreen from "./Screens/LandingScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
import AboutScreen from "./Screens/AboutScreen.jsx";
import DetailScreen from "./Screens/DetailScreen.jsx";
import AdminScreen from "./Screens/AdminScreen.jsx";
import SignUpScreen from "./Screens/SignUpScreen.jsx";
import { useState } from "react";
// import SignInScreen from "./Screens/SignInScreen.jsx";
// import AccountScreen from "./Screens/AccountScreen.jsx";
// import ProfileScreen from "./Screens/ProfileScreen.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogIn = () =>
    setUser({
      id: "1",
      name: "Adarsh",
      permission: ["analyze"],
      roles: ["administration"],
    });
  const handleLogOut = () => setUser(null);
  return (
    <>
      <BrowserRouter>
        <Navigation />
        {user ? (
          <button onClick={handleLogOut}>SignOut</button>
        ) : (
          <button onClick={handleLogIn}>LogIn</button>
        )}
        <Routes>
          <Route exact path='/' element={<LandingScreen />} />
          <Route path='/home'>
            <Route path=':id' element={<HomeScreen />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={user} />}>
            <Route path='about' element={<AboutScreen />} />
            <Route path='detail' element={<DetailScreen />} />
            <Route path='admin' element={<AdminScreen />} />
          </Route>
          <Route path='signUp' element={<SignUpScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
// https://tiny-blue-vulture-shoe.cyclic.app/
export default App;

const ProtectedRoute = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to={"/signUp"} replace />;
  }
  return children ? children : <Outlet />;
};

const Navigation = () => {
  // const style = ({ isActive }) => ({
  //   color: isActive ? "red" : "white",
  // });
  return (
    <div className='nav-container'>
      <nav className='Navigation'>
        <NavLink className='nav-links' to='/'>
          <img
            className="nav-logo"
            src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around'
            alt='Zomato_Logo'
          />
        </NavLink>
        <NavLink className='nav-links' to='/home/order'>
          Home
        </NavLink>
        <NavLink className='nav-links' to='/about'>
          About
        </NavLink>
        <NavLink className='nav-links' to='/detail'>
          Detail
        </NavLink>
        <NavLink className='nav-links' to='/admin'>
          Admin
        </NavLink>
      </nav>
    </div>
  );
};
