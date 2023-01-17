import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeaturedProduct from "./FeaturedProduct";
const Home = () => {
    const data={
        name:"Ecommerse store"
    }
  return (
    <>
  <HeroSection myData={data} />
  <FeaturedProduct/>
  <Services/>
  <Trusted/>
</>
);
};
export default Home;