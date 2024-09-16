import React from "react";
import Places from "./Places/Places";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer";
import Text1 from "./Text/Text1";
import Misc from "./Misc";
import Text2 from "./Text/Text2";
import Slider from "./Slider";
import Text3 from "./Text/Text3";

const Content = () => {
  return (
    <div>
      <Text1 />
      <Misc />
      <Text2 />
      <Slider />
      <Places />
      <Text3/>
      <Carousel />
      <Footer />
    </div>
  );
};

export default Content;
