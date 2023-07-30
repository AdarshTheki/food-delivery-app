import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navigation from "./components/pages/Navigation";
import LandingScreen from "./Screens/LandingScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
import AboutScreen from "./components/pages/AboutScreen.jsx";
import Footer from "./components/pages/Footer";
import UserProfile from "./components/pages/UserProfile";
import SignUp from "./components/pages/SignUp";
import { useState } from "react";

// Protected Route
const ProtectedRoute = ({ isAllowed, redirectPath = "/signup", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogIn = () =>
    setUser({
      id: "1",
      name: "Adarsh",
      permission: ["analyze"],
      role: ["admin"],
    });
  const handleLogout = () => setUser(null);
  return (
    <div style={{ backgroundColor: "#323232", color: "#fff" }}>
      <BrowserRouter>
        <Navigation />
        {user ? (
          <button className='signOut-btn' onClick={handleLogout}>
            Sign Out
          </button>
        ) : (
          <button className='signIn-btn' onClick={handleLogIn}>
            Sign In
          </button>
        )}
        <Routes>
          <Route exact path='/' element={<LandingScreen />} />
          <Route path='/home'>
            <Route path=':id' element={<HomeScreen />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedRoute isAllowed={user} />}>
            <Route path='/profile' element={<UserProfile user={user} />} />
            <Route path='/about' element={<AboutScreen />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
