import React from "react";
import { withRouter } from "react-router-dom";

import { MenuItemProps } from '../../utils/interfaces';

import "./MenuItem.styles.scss";

const MenuItem: any = ({ title, imageUrl, size, history, match, linkUrl }: MenuItemProps) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
