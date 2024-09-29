import React from "react";
import Para2 from "../Para/Para2/Para2";
import Para3 from "../Para/Para3/Para3";
import ImgCmpt from "../ImgCmpt/ImgCmpt";
import Text1 from "../Text1/Text1";
import Misc1 from "../Misc/Misc1";
import Text2 from "../Text1/Text2";
import Misc2 from "../Misc/Misc2";
import Text3 from "../Text1/Text3";
import SlideShow from "../ImgSlideShow/SlideShow";
import Text4 from "../Text1/Text4";
import Review from "../Review/Review";

const Content = () => {
  return (
    <div>
      <Para2 />
      <Para3 />
      <ImgCmpt />
      <Text1 />
      <Misc1 />
      <Text2 />
      <Misc2 />
      <Text3 />
      <SlideShow />
      <Text4 />
      <Review />
    </div>
  );
};

export default Content;
