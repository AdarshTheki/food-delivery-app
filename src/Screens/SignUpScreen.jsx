import logo from "../../src/assets/logo.avif";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  return (
    <div className='signup max-width'>
      <div className='signup_header'>
        <div className='img'>
          <img src={logo} alt='' />
        </div>
        <div className='signup_btn'>
          <button className='btn'>Log In</button>
          <button className='btn'>Sign Up</button>
        </div>
      </div>
      <div className='signup_main'>
        <div className='main_left'>
          <img
            src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png'
            alt='mobile_pic'
          />
        </div>
        <div className='main_right'>
          <h1>Get the Zomato App</h1>
          <p>
            We will send you a link, open it on your phone to download the app
          </p>
          <form action="">
            <label htmlFor="email">Email:{" "} 
            <input type="text" placeholder="Enter Email"/>
            </label>
            <button className="btn">Share App Link</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
