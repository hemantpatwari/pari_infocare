import React from "react";
import "./Header.css";
import img from "./profile_pic.jpg";

function Header() {
  return (
    <div className="nav">
      <div className="nav-header">
        <div className="nav-title">Logo</div>
      </div>
      <div className="nav-links">
        <div>Companies</div>
        <div>Holdings</div>
        <div>Order Books</div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
