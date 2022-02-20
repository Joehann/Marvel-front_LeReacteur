import "./start-page.scss";
import ImageDepthMap from "react-depth-map";
import Groot from "../../assets/pixiEffect/groot.jpg";
import GrootDepthMap from "../../assets/pixiEffect/groot-depthmap.jpg";
import { useState, useEffect } from "react";
const StartPage = ({ setIsStarted }) => {
  const [displayBtn, setDisplayBtn] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayBtn(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
