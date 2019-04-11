import React from 'react';
import { PublicNavigation } from '@transferwise/public-navigation';

import Refractor from 'react-refractor';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const HeaderDoc = () => (
  <section id="navbar" className="section">
    <div className="container--wide">
      <h1 className="colored-dot">Header</h1>
      <p>
      Based on React component &nbsp;
        <a href="https://github.com/transferwise/public-navigation">Public navigation</a>
      </p>
      <Refractor
        language="javascript"
        value={`
import "~neptune-css/build/css/header.css";
import "~neptune-css/build/css/public-navigation.css";
          `}
      />
    </div>
    <header className="bg-primary">
      <PublicNavigation language="es" />
    </header>
  </section>
);


export default HeaderDoc;
