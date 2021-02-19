/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "./modal-window.styles.scss";

import ModalItem from "../modal-item/modal-item.component";

const ModalWindow = ({ onData, handleToggleModal }) => (
  <div className="modal-mobile">
    <div className="modal-block">
      <div className="modal-close" onClick={handleToggleModal}>
        &#10006;
      </div>
      <div className="modal-links">
        {onData.map((item, index) => (
          <ModalItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default ModalWindow;
