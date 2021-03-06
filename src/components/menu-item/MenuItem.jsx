import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imgURL, size, history, linkURL, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkURL}`)}
    >
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

export default withRouter(MenuItem);
