/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";

import "./menu-item.styles.scss";

import MenuLink from "../menu-link/menu-link.component";

const MenuItem = ({ page, links }) => {
  const [toggleHidden, setToggleHidden] = useState(false);

  return (
    <div
      className="menu-item"
      onMouseOver={() => setToggleHidden(true)}
      onMouseOut={() => setToggleHidden(false)}
    >
      <div className="menu-item-links">
        <span className="link">{page}</span>
        <div
          className={`menu-item-block ${toggleHidden ? "active" : "hide"}`}
          onMouseOut={() => setToggleHidden(false)}
        >
          <span>{page}:</span>
          <div className="menu-item-block-links">
            {links.map((item, index) => (
              <MenuLink key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
