import "./start-page.scss";
import ImageDepthMap from "react-depth-map";
import Groot from "../../assets/pixiEffect/groot.jpg";
import GrootDepthMap from "../../assets/pixiEffect/groot-depthmap.jpg";
import { useState, useEffect } from "react";
const StartPage = ({ setIsStarted }) => {
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  const [displayBtn, setDisplayBtn] = useState(false);
  useEffect(() => {
    window.onload = () => {
      setPageIsLoaded(true);
      const timer = setTimeout(() => {
        setDisplayBtn(true);
      }, 1500);
      return () => clearTimeout(timer);
    };
  }, []);

  const start = () => {
    setIsStarted(true);
  };

  return pageIsLoaded ? (
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
  ) : (
    <div className="on-load">
      <h1>...is loading</h1>
    </div>
  );
};

export default StartPage;
