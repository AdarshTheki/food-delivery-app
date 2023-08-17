import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import './styles/User.css'

const User = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [username, setUsername] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login({ id: 1, username }));
    navigate("/home")
  };
  useEffect(() => {}, []);

  return (
    <div className="user">
      <h2>The best pizza.</h2>
      <h3>Straight out of the oven, straight to you.</h3>
      <p>👋 Welcome! Please start by telling us your name:</p>
      {user !== null ? (
        <button onClick={() => navigate("/home")}>CONTINUE ORDERING, {user?.username}</button>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            type='text'
            placeholder='your full name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <button type='submit'>STArT ORDERING</button>
        </form>
      )}
    </div>
  );
};

export default User;
