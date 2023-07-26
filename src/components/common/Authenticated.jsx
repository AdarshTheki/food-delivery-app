import './Authenticate.css'
import { useAuth0 } from "@auth0/auth0-react";
import user_pic from "../../assets/user_pic.png";

const Authenticated = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <div>
      {/* Login page and Details */}
      {isAuthenticated ? (
        <div className='signUp-detail' title='User'>
          <span>{user.name.slice(0, 15)}</span>
          <img src={user.picture} alt='' width='50' />
          <button onClick={logout} className='logout'>
            logout
          </button>
        </div>
      ) : (
        <div className='signUp-detail' title='User'>
          <span>user name</span>
          <img src={user_pic} alt='pic' width='50' />
          <button onClick={loginWithRedirect} className='login'>
            Please LogIn
          </button>
        </div>
      )}
    </div>
  );
};

export default Authenticated;
