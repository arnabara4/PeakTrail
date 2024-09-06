import React from "react";
import Text from "./Text/Text";
import Text1 from "./Text/Text1";
import Covered from "./Covered/Covered";
import Text2 from "./Text/Text2";
import Test3 from "./Text/Test3";
import Misc from "./Misc";
import Text5 from "./Text/Text5";
import Places from "./Places/Places";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <Text />
      <Text1 />
      <Covered />
      <Text2 />
      <Test3 />
      <Misc />
      <Text5/>
      <Places/>
      <Carousel/>
      <Footer/>
    </div>
  );
};

export default Content;
