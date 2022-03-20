import React from "react";
import "./Header.css";
import sun from "../Assests/sun.png";
const Header = () => {
  return (
    <div className="headerDiv">
      <h1 style={{ textAlign: "center" }} className="storeTitle">
        GAMES STORE
      </h1>
      <img src={sun} alt="sun" className="sunImg" />
    </div>
  );
};

export default Header;
