import "./icon.css";
import icon from "../../assets/images/logo 3d 2.svg";

export const Icon = () => {
  return (
    <div className="icon">
      <div className="container">
        <img src={icon} alt="" className="front" />
        <img src={icon} alt="" className="left" />
        <img src={icon} alt="" className="right" />
        <img src={icon} alt="" className="back" />
      </div>
    </div>
  );
};
