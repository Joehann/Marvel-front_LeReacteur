import "./start-page.scss";
import ImageDepthMap from "react-depth-map";
import Groot from "../../assets/pixiEffect/groot.jpg";
import GrootDepthMap from "../../assets/pixiEffect/groot-depthmap.jpg";
import { useState } from "react";
const StartPage = ({ setIsStarted }) => {
  const [displayBtn, setDisplayBtn] = useState(false);

  setTimeout(() => setDisplayBtn(true), 2000);

  const start = () => {
    setIsStarted(true);
  };

  return (
    <div className="starter">
      <ImageDepthMap
        originalImg={Groot}
        depthImg={GrootDepthMap}
        verticalThreshold={40}
        horizontalThreshold={80}
      />

      {displayBtn && (
        <button className="start-btn" onClick={start}>
          Start
        </button>
      )}
    </div>
  );
};

export default StartPage;
