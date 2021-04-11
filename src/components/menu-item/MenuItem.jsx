import React from "react";
import "./menu-item.scss";

const MenuItem = ({ title, id, imgURL, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imgURL})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
