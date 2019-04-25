import React from 'react';
import { PublicNavigation } from '@transferwise/public-navigation';

import Refractor from 'react-refractor';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const PublicNavigationDoc = () => (
  <section id="publicNavigation" className="section">
    <div className="container container--wide">
      <h1 className="colored-dot doc-section__title">Public Navigation.</h1>
      <p>
      Based on React component &nbsp;
        <a href="https://github.com/transferwise/public-navigation">Public navigation</a>
      </p>
      <Refractor
        language="javascript"
        value={`
import "~neptune-css/build/css/public-navigation.css";
          `}
      />
      <div className="alert alert-info">
        <p>
          <a href="https://transferwise.github.io/public-navigation/" target="_blank">Try the demo</a>
          {' '}
to view the responsive version as well.
        </p>
      </div>

    </div>
    <div className="navbar-background navbar-background--inverse">
      <PublicNavigation language="en" />
    </div>
    
  </section>
);


export default PublicNavigationDoc;
