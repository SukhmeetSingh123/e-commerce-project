import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Button} from "../style/Button"
const HeroSection = ({myData,MyImage}) => {
    const {name}=myData;
    const {image}=MyImage;
  return <Wrapper>
  <div className="container">
  <div className="grid grid-two-column">
  <div className="hero-section-data">
  <p className="intro-data">Welcome to </p>
  <h2>{name}</h2>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eveniet iste modi vero repellendus soluta facilis ullam maiores. Ipsam laboriosam, rerum repudiandae distinctio cumque, accusantium obcaecati labore temporibus animi amet maxime est.</p>
    <NavLink to="/products">
    <Button>Shop Now</Button>
    </NavLink>
  </div>
  <div className="hero-section-image">
  <figure>
  <img src={image} alt="image" />
  </figure>
  </div>
  </div>
  </div> 
  </Wrapper>
};
const Wrapper = styled.section`
  padding: 2rem 0;
  img {
    min-width: 10rem;
    height:23rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 77%;
      height: 88%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 37%;
      top: -3rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default HeroSection;