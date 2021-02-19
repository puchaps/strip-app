/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./modal-item.styles.scss";

import MenuLink from "../../header-components/menu-link/menu-link.component";

const ModalItem = ({ page, links }) => (
  <div className="modal-item">
    <div className="modal-page">{page}</div>
    <div className="modal-items">
      {links.map((item, index) => (
        <MenuLink key={index} {...item} />
      ))}
    </div>
  </div>
);

export default ModalItem;
