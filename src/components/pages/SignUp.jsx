import { styled } from "styled-components";

const SignUp = () => {
  return (
    <SignUpComponent>
      <div className='SignUp'>
        <h1>Sign Up</h1>
        <h2>
          Click to the <span>SignIn Button</span>
          <br /> This page Is a Protected Route!
        </h2>
        <zero-md src='./src/Screens/README.md'></zero-md>
      </div>
    </SignUpComponent>
  );
};

export default SignUp;

const SignUpComponent = styled.div`
  .SignUp {
    margin: 20px auto;
    max-width: 650px;
    text-align: center;
  }
  .SignUp h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .SignUp h2 {
    font-size: 2rem;
    color: rgb(155, 192, 250);
    margin-bottom: 20px;
  }
  .SignUp h2 span {
    color: red;
  }
`;
