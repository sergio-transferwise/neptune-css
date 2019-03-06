import React, { StrictMode } from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { create } from "@storybook/theming";
import "./main.less";

const theme = create({
  base: "light",
  colorPrimary: "#2e4369",
  colorSecondary: "#1EA7FD"
});
addParameters({ options: { theme } });

const CenterDecorator = storyFn => (
  <StrictMode>
    <div className="doc" id="top">
      {storyFn()}
    </div>
  </StrictMode>
);
addDecorator(CenterDecorator);

configure(loadStories, module);

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
