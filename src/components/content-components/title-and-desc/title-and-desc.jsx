import React from "react";

import "./title-and-desc.styles.scss";

import Button from "../../custom-components/button/button.component";

const TitleAndDescription = () => (
  <div className="title-and-descr">
    <div className="title">
      <h1>Payments infrastructure for the internet</h1>
    </div>
    <div className="descr">
      <span>
        Millions of companies of all sizes—from startups to Fortune 500s—use
        Stripe’s software and APIs to accept payments, send payouts, and manage
        their businesses online.
      </span>
    </div>
    <div className="btn">
      <Button>Start Now</Button>
    </div>
  </div>
);

export default TitleAndDescription;
