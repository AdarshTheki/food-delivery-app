import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/pages/Navigation";
import LandingScreen from "./Screens/LandingScreen.jsx";
import HomeScreen from "./Screens/HomeScreen.jsx";
import SignUpScreen from "./Screens/SignUpScreen.jsx";
import DetailScreen from "./components/pages/DetailScreen.jsx";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <div style={{ backgroundColor: "#323232", color:"#fff" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<LandingScreen />} />
          <Route path='/home'>
            <Route path=':id' element={<HomeScreen />} />
          </Route>
          <Route path='signUp' element={<SignUpScreen />} />
          <Route path='detail' element={<DetailScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
