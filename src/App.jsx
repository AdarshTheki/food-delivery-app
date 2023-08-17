import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingScreen from "./Screens/LandingScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
import AboutScreen from "./components/pages/AboutScreen.jsx";
import Footer from "./components/Footer";
import UserProfile from "./components/pages/UserProfile";
import SignUp from "./components/pages/SignUp";
import { useSelector } from "react-redux";
import User from "./components/User";

const App = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div style={{ backgroundColor: "#323232", color: "#fff" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<User />} />
          <Route exact path='/home' element={<LandingScreen />} />
          <Route path='/home'>
            <Route path=':id' element={<HomeScreen />} />
          </Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<UserProfile user={auth.user} />} />
          <Route path='/about' element={<AboutScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
