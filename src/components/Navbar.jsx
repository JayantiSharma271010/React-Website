import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <nav>
        <div className="logo">
          <Link to="/">Maderin Torff</Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    z-index: 999;
    position: relative;
    padding: 0 2rem;
  }

  .nav-links {
    font-family: 'Raleway';
    ul {
      display: flex;
      li{
        width: 6.6rem;
        list-style: none;
        a{
          text-decoration: none;
          color: black;
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }

  .logo{
    a{
      font-size: 24px;
    color: black;
    text-decoration: none;
    margin: 0 2rem;
    font-family: 'Nunito';
    }
  }
`;
export default Navbar;
