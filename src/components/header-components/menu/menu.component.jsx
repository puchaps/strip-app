/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";

import { MainContext } from "../../../context/context";

import "./menu.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

const Menu = () => {
  const { data } = useContext(MainContext);

  return (
    <menu className="menu">
      {data.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </menu>
  );
};

export default Menu;
