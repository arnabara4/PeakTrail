import React from "react";
import Places from "./Places/Places";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer";
import Text1 from "./Text/Text1";
import Misc from "./Misc";
import Text0 from "./Text/Text0";
import Text4 from "./Text/Text4";
import Misc2 from "./Misc2";
import Covered from "../components/Covered/Covered"
import Text5 from "./Text/Text5";
import Text6 from "./Text/Text6";

const Content = () => {
  return (
    <div>
      <Text1 />
      <Misc />
      <Text0/>
      <Text4/>
      <Covered/>
      <Text5/>
      <Misc2/>
      <Text6/>
      <Places />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Content;
