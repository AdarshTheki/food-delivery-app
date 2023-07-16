import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className='max-width header'>
      <div className='header__logo'>
        <img
          src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
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
      <div className='sign-buttons'>
        {isAuthenticated && (
          <span className='username'>
            {user.name.slice(0, 15)}{" "}
            <img src={user.picture} alt='' width='50' />
          </span>
        )}
        {isAuthenticated ? (
          <button onClick={logout} className='logout'>
            logout
          </button>
        ) : (
          <button onClick={loginWithRedirect} className='login'>
            Please LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
