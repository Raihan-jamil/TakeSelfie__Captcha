import React, { useState } from "react";
import HeaderStyle from "./HeaderStyle.css";

const Header = ({ captcha, index }) => {
  const shape = ["Triangles", "Rectangles", "Circles"];
  return (
    <div>
      {captcha ? (
        <p className="header">Select {shape[index]}</p>
      ) : (
        <p className="header">Take Selfie</p>
      )}
    </div>
  );
};

export default Header;
