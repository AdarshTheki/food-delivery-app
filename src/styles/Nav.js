import { styled } from "styled-components";

export const Nav = styled.nav`
  .user-img {
    display: flex;
    align-items: center;
    gap: 5px;
    img {
      display: block;
      width: 30px;
      border-radius: 50%;
    }
    .name {
      font-size: 1.5rem;
    }
    .log {
      font-size: 1.8rem;
      text-transform: uppercase;
      color: red;
      font-weight:500;
      cursor:pointer;
      margin: 0 5px;

      &:hover{
        color:#333;
      }
    }
  }

  .navbar-list {
    display: flex;
    gap: 4.8rem;
    li {
      list-style: none;

      .navbar-link {
        font-weight: 500;
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .navbar-list {
      gap: 2rem;
    }
  }

  .mobile-navbar-btn {
    display: none;
    cursor: pointer;

    .close-outline {
      display: none;
    }
  }

  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    /* hide the original nav menu  */
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: lightgray;

      display: flex;
      gap: 5rem;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      text-align: center;

      transform: translateX(100%);

      visibility: hidden;
      opacity: 0;

      li {
        .navbar-link {
          &:link,
          &:visited {
            font-size: 4.2rem;
          }

          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: fixed;
      top: 3%;
      right: 6%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
    }
  }
`;
