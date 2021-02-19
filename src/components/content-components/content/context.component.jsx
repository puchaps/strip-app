import React from "react";

import "./content.style.scss";

import TitleAndDescription from "../title-and-desc/title-and-desc";
import ImgMain from "../img-main/img-main.component";

const Context = () => (
  <section className="context">
    <TitleAndDescription />
    <ImgMain />
  </section>
);

export default Context;
