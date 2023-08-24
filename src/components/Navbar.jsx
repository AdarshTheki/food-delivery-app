import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { Nav } from "../styles/Nav";
import { useAuth0 } from "@auth0/auth0-react";

// Header Section in navbar
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const User = () => {
    const { user, isAuthenticated, loginWithRedirect, logout, isLoading } =
      useAuth0();
    if (isLoading) {
      return <h3>User loading....</h3>;
    }
    return (
      <>
        {isAuthenticated ? (
          <div className='user-img'>
            <img src={user?.picture} alt='img' width={30} />
            <span className='name'>{user?.nickname || user?.name}</span>
            <h3 className='log' onClick={() => logout()}>
              logOut
            </h3>
          </div>
        ) : (
          <div className='user-img'>
            <FaUser className='name' />
            <span className='name'>Owner</span>
            <h3 className='log' onClick={() => loginWithRedirect()}>
              Login
            </h3>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <Nav>
        <div className={openMenu ? "menuIcon active" : "menuIcon"}>
          <ul className='navbar-list'>
            <li>
              <NavLink
                className='navbar-link'
                onClick={() => setOpenMenu(false)}
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className='navbar-link'
                onClick={() => setOpenMenu(false)}
                to='/products'>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className='navbar-link'
                onClick={() => setOpenMenu(false)}
                to='/contact'>
                Contact
              </NavLink>
            </li>
            <li>
              <span className='navbar-link'>
                <User />
              </span>
            </li>
          </ul>
          {/* logo icon */}
          <div className='mobile-navbar-btn'>
            <CgMenu
              name='menu-outlie'
              className='mobile-nav-icon'
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name='close-outline'
              className='close-outline mobile-nav-icon'
              onClick={() => setOpenMenu(false)}
            />
          </div>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
