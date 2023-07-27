import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // const style = ({ isActive }) => ({
  //   color: isActive ? "red" : "white",
  // });
  return (
    <div className='nav-container'>
      <nav className='Navigation'>
        <NavLink className='nav-links' to='/'>
          <img
            className='nav-logo'
            src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around'
            alt='Zomato_Logo'
          />
        </NavLink>
        <NavLink className='nav-links' to='/home/order'>
          Home
        </NavLink>
        <NavLink className='nav-links' to='/signup'>
          SignUp
        </NavLink>
        <NavLink className='nav-links' to='/detail'>
          Detail
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
