import HeroSection from "./HeroSection";
const About = () => {
    const data={
        name:"About Ecommerse ",
        image:"/images/About_Page.jpg"
    }
  return <>
  <HeroSection myData={data} MyImage={data}/>
  </>;
};

export default About;