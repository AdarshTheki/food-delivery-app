import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Footer = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className='contact-short-btn'>
            <Button>
              <NavLink to='/contact'>Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>Adarsh Verma</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className='footer-subscribe'>
            {isAuthenticated ? (
              <>
                <h3>
                  Hey, {user?.nickname || user?.name} Your login is
                  successfully. Your last update time is {user?.updated_at}.
                </h3>
                <Button className="btn" onClick={() => logout()}>Logout</Button>
              </>
            ) : (
              <>
                <h3>Subscribe to get important updates</h3>
                <form
                  onSubmit={() => loginWithRedirect()}
                  className='form-input'>
                  <input
                    type='email'
                    required
                    autoComplete='off'
                    placeholder='Email'
                  />
                  <br />
                  <div>
                    <Button className="btn">Login</Button>
                  </div>
                </form>
              </>
            )}
          </div>

          {/* 3rs column  */}
          <div className='footer-social'>
            <h3>Follows Us</h3>
            <div className='footer-social--icons'>
              <div>
                <FaDiscord className='icons' />
              </div>
              <div>
                <FaInstagram className='icons' />
              </div>
              <div>
                <NavLink to='https://github.com/AdarshTheki' target='_blank'>
                  <FaYoutube className='icons' />
                </NavLink>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className='footer-contact'>
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className='footer-bottom--section'>
          <hr />
          <div className='container grid grid-two-column'>
            <p>@{new Date().getFullYear()} @AdarshVerma. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-subscribe {
      .form-input {
        display: grid;
        width: 70%;
      }
      input[type="submit"] {
        transition: all 0.4s ease-out;
      }
      input[type="submit"]:hover {
        transform: scale(0.9);
        opacity: 0.8;
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
