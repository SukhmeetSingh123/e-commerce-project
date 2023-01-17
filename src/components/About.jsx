import HeroSection from "./HeroSection";
import {useProductContext} from "../context/productcontext";
const About = () => {
    const {MyName}= useProductContext();
    const data={
        name:"About Ecommerse "
    }
  return <>
  <HeroSection myData={data}/>
  
  </>;
};

export default About;