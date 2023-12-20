import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero-section">
        <div className="content">
          <span>Ui/UI Designer</span>
          <h2>Hello, my name is Madelyn Torff</h2>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="btn-group">
            <button className="primary-btn btn">Projects</button>
            <button className="secondary-btn btn">LinkedIn</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  color: black;
  z-index: 1;
  padding: 0 5rem;
  &::before {
    content: " ";
    width: 720px;
    height: 629px;
    position: absolute;
    background: url("./image.png");
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    right: 0;
    background-size: cover;
  }

  .content {
    width: 30vw;
    margin: 2rem 4rem;
    padding: 2rem 0;

    span {
      color: #fdc435;
      text-transform: uppercase;
      font-size: 18px;
    }

    h2 {
      font-size: 64px;
      line-height: 120%;
      font-family: 'Playfair display';
      margin-top: 1rem;
      font-weight: bold;
    }

    p {
      color: #828282;
      font-size: 22px;
      margin: 1.4rem 3rem 1rem 0;
      font-family: 'Nunito';
      line-height: 150%;

    }
  }
  .btn{
    border-radius: 5px !important;
    padding: .3rem 1rem !important;
    font-family: 'Roboto';
    font-size: 18px;
  }

  
`;
export default HeroSection;
