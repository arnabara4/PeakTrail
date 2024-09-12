import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header/Header";
import Text3 from "./Components/Text3";
import SlideShow from "./Components/SlideShow";
import Text from "./Components/Text";
import Misc from "./Components/Misc";
import Text2 from "./Components/Text2";
import Covered from "./Components/Covered/Covered";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer";

const College = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Text3/>
      <SlideShow/>
      <Text/>
      <Misc/>
      <Text2/>
      <Covered/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default College;
