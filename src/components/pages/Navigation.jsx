import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Navigation = () => {
  return (
    <div className='nav-container'>
      <nav className='Navigation'>
        <NavLink className='nav-links' to='/'>
          <img className='nav-logo' src={Logo} alt='logo' />
        </NavLink>
        <NavLink className='nav-links' to='/home/order'>
          Home
        </NavLink>
        <NavLink className='nav-links' to='/detail'>
          Detail
        </NavLink>
        <NavLink className='nav-links' to='/profile'>
          Profile
        </NavLink>
        <NavLink className='nav-links' to='/about'>
          About
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
