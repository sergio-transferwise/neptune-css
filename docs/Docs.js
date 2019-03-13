import React, { StrictMode } from "react";
import "./Docs.less";
import "@transferwise/public-navigation/dist/public-navigation.css";

import "../build/badge.css";
import "../build/buttons.css";
import "../build/circles.css";
import "../build/core.css";
import "../build/flex.css";
import "../build/grid.css";
import "../build/media.css";
import "../build/skew.css";
import "../build/spacing.css";
import "../build/table.css";
import "../build/wrap.css";
import "../build/header.css";
import "../build/background.css";
import "../build/columns.css";

import { PublicNavigation, Footer } from "@transferwise/public-navigation";
import Core from "./CoreDocs";
import ComponentList from "./ComponentListDocs";
import Badge from "./BadgeDocs";
import Buttons from "./ButtonsDocs";
import Circles from "./CirclesDocs";
import Carousel from "./CarouselDocs";
import Forms from "./FormsDocs";
import Grid from "./GridDocs";
import Columns from "./ColumnsDocs";
import Wrap from "./WrapDocs";
import Skew from "./SkewDocs";
import Flex from "./FlexDocs";
import Media from "./MediaDocs";
import Background from "./BackgroundDocs";

import Table from "./TableDocs";
import Spacing from "./SpacingDocs";
import Header from "./HeaderDocs";

const Docs = () => (
  <StrictMode>
    <div className="doc" id="top">
      <a href="#top" className="doc-go-top">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
          <title>up-arrow</title>
          <polygon fill="#2e4369" points="18.01 7.47 12 1.46 5.99 7.47 6.7 8.18 11.5 3.38 11.5 22 12.5 22 12.5 3.38 17.3 8.18 18.01 7.47" />
        </svg>
      </a>
      <header className="wrap--content section">
        <h1 className="display-4 colored-dot">Thalassa</h1>
        <p className="lead">CSS library</p>
      </header>
      <ComponentList />
      <Core />
      <Badge />
      <Buttons />
      <Circles />
      <Carousel />
      <Forms />
      <Media />
      <Skew />
      <Columns />
      <Flex />
      <Grid />
      <Wrap />
      <Background />
      <Header />
      <Table />
      <Spacing />
    </div>
  </StrictMode>
);
export default Docs;
