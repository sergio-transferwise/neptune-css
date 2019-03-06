import React from "react";
import { storiesOf } from "@storybook/react";
import "./Badge.less";

storiesOf("Badge", module).add("default", () => (
  <section id="badge" className="wrap--content section">
    <h1 className="colored-dot">
      Badge <span className="badge">BT</span>
    </h1>
    <p className="lead">7kB minified</p>
  </section>
));
