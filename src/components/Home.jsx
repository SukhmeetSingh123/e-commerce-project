import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeaturedProduct from "./FeaturedProduct";
const Home = () => {
    const data={
        name:"Ecommerse store",
        image:"/images/home_page.jpg",
    }
  return (
    <>
  <HeroSection myData={data} MyImage={data} />
  <FeaturedProduct/>
  <Services/>
  <Trusted/>
</>
);
};
export default Home; 