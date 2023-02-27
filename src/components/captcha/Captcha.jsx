import React, { useState } from "react";
import CaptchaStyle from "./CaptchaStyle.css";
import { BsTriangle } from "react-icons/bs";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { BiRectangle } from "react-icons/bi";

const Captcha = ({
  total,
  setTotal,
  icons,
  selectedItems,
  setSelectedItems,
}) => {
  const handleItemClick = (index, item) => {
    if (selectedItems.includes(index)) {
      const newSelectedItems = selectedItems.filter((i) => i !== index);
      setSelectedItems(selectedItems.filter((i) => i !== index));
      setTotal(newSelectedItems.map((item) => icons[item]));
    } else {
      setSelectedItems([...selectedItems, index]);
      setTotal([...total, item]);
    }
  };

  return (
    <div className="icons">
      {icons.map((item, index) => {
        if (item === 0) {
          return (
            <div
              key={index}
              className={
                selectedItems.includes(index) ? "iconSelected" : "icon"
              }
              onClick={() => handleItemClick(index, item)}
            >
              <BsTriangle size={40} />
            </div>
          );
        } else if (item === 1) {
          return (
            <div
              key={index}
              className={
                selectedItems.includes(index) ? "iconSelected" : "icon"
              }
              onClick={() => handleItemClick(index, item)}
            >
              <BiRectangle size={40} />
            </div>
          );
        } else if (item === 2) {
          return (
            <div
              key={index}
              className={
                selectedItems.includes(index) ? "iconSelected" : "icon"
              }
              onClick={() => handleItemClick(index, item)}
            >
              <VscCircleLargeOutline size={40} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Captcha;
