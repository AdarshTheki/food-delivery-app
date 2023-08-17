import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <div className='nav-container'>
      <NavLink to='/' className='links'>
        FAST REACT FOOD CO.
      </NavLink>
      <form action='' className='nav-form'>
        <input type='text' placeholder='search order #' />
        <button>Go</button>
      </form>
      <NavLink to="/" className='user-icon'>
        <FaUserAlt /> {auth.user ? auth.user?.username : "UserLogin"}
      </NavLink>
    </div>
  );
};
export default Navigation;
