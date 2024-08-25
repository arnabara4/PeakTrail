import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Para1 from "./components/Para/Para1/Para1";
import VideoTxt from "./components/VideoTxt/VideoTxt";
import Para2 from "./components/Para/Para2/Para2";
import Para3 from "./components/Para/Para3/Para3";
import Para4 from "./components/Para/Para4/Para4";
import ImgCmpt from "./components/ImgCmpt/ImgCmpt";
import Text1 from "./components/Text1/Text1";
import Misc1 from "./components/Misc/Misc1";
import Text2 from "./components/Text1/Text2";
import Misc2 from "./components/Misc/Misc2";
import Text3 from "./components/Text1/Text3";

const App = () => {
  return (
    <div>
      <Navbar />
      <Para1 />
      <VideoTxt />
      <Para2 />
      <Para3 />
      <Para4 />
      <ImgCmpt />
      <Text1 />
      <Misc1 />
      <Text2 />
      <Misc2 />
      <Text3 />
    </div>
  );
};

export default App;
