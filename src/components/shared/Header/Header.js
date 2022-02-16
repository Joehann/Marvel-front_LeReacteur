import "./header.scss";
import MarvelLogo from "../../../assets/img/Marvel-Logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={MarvelLogo} alt="" />
      </div>
      <div className="right-img"></div>
    </div>
  );
};

export default Header;
