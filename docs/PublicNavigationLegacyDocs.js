import React from 'react';
import { PublicNavigation } from '@transferwise/public-navigation';

import Refractor from 'react-refractor';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const PublicNavigationDoc = () => (
  <section id="publicNavigationLegacy" className="section">
    <div className="container container--wide">
      <h1 className="colored-dot doc-section__title">Public Navigation (Legacy).</h1>
      <p>
      Based on React component &nbsp;
        <a href="https://github.com/transferwise/public-navigation">Public navigation</a>
        {' '}
with dependency with
        {' '}
        <a href="https://bootstrap.transferwise.com/"> TW Bootstrap</a>
      </p>
      
      <Refractor
        language="javascript"
        value={`import "~neptune-css/build/css/public-navigation-legacy.css";
          `}
      />
      <p>Contains:</p>
      <Refractor
        language="javascript"
        value={`"~neptune-css/build/css/navbar.css;"
"~neptune-css/build/css/utilities.css;"
          `}
      />

    </div>
    <div className="navbar-background navbar-background--inverse">
      <PublicNavigation language="en" />
    </div>
    
  </section>
);


export default PublicNavigationDoc;
