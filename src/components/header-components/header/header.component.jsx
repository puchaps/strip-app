import React from "react";

import "./header.styles.scss";

import Menu from "../menu/menu.component";
import Button from "../../custom-components/button/button.component";
import Logo from "../logo/logo.component";
import Burger from "../burger/burger.component";

const Header = () => (
  <header className="header">
    <Logo />
    <Menu />
    <Burger />
    <Button>Sign In</Button>
  </header>
);

export default Header;
