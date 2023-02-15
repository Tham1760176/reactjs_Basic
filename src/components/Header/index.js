import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="bg-red header">
      <div className="logo">
        <img src="/images/logo192.png" alt="" />
        <a href="#">APOLLO</a>
      </div>
      <div className="menu">
        <ul>
          <li>Trang chu</li>
          <li> San Pham</li>
          <li>Lien he</li>
        </ul>
      </div>
      <div className="user">
        <div className="login"></div>
      </div>
    </div>
  );
};

export default Header;
