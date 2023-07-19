import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import user_pic from "../../../public/user_pic.png";
import logo from "../../../public/logo.avif";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className='max-width header'>
      <div className='header__logo'>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <div className='search__container'>
        <div className='location-inputs'>
          <label htmlFor='location'>
            <i className='fi fi-br-marker'></i>
          </label>
          <input
            type='text'
            id='location'
            placeholder='Block B, Jaypee Greens, Greater Noida'
          />
        </div>
        <div className='location-inputs'>
          <label htmlFor='search'>
            <i className='fi fi-br-search'></i>
          </label>
          <input
            type='text'
            placeholder='Search for restaurant, cuisine or a dish'
            id='search'
          />
        </div>
      </div>
      {/* SignIn Details */}
      {isAuthenticated ? (
        <div className='signUp-detail' title="User">
          <span>{user.name.slice(0, 15)}</span>
          <img src={user.picture} alt='' width='50' />
          <button onClick={logout} className='logout'>
            logout
          </button>
        </div>
      ) : (
        <div className='signUp-detail' title="User">
          <span>user name</span>
          <img src={user_pic} alt='pic' width='50'/>
          <button onClick={loginWithRedirect} className='login'>
            Please LogIn
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
