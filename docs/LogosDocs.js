import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import './less/prism.css';

const Logos = () => (
  <section id="logos" className="container container--wide section">
    <h1 className="colored-dot doc-section__title">Logos.</h1>
    <p>
Logos do not have a fixed size, they expand to fill the dimensions of
      their container.  Make sure to specify a height otherwise your logo may
      not render.
    </p>
  
    <div className="logo logo-primary logo-5 m-b-2"  />
    <div className="bg-primary p-t-2 p-b-2">
      <div className="logo logo-inverse logo-5"  />
    </div>

    <Refractor
      language="markup"
      value={`
  <div class="logo logo-primary logo-5"></div>

  <div class="bg-primary">
      <div class="logo logo-inverse logo-5"></div>
  </div>
        `}
    />
    <h2 className="doc-section__subtitle">
      Logo sizes
    </h2>
    <p className="m-b-0">Quick sizes that whose height is a multiple of our spacing.</p>
    <div className="logo logo-primary logo-3 m-t-3 m-b-3" />
    <div className="logo logo-primary logo-4 m-b-3" />
    <div className="logo logo-primary logo-5 m-b-3" />
    <Refractor
      language="markup"
      value={`
<div class="logo logo-primary logo-3"></div>
<div class="logo logo-primary logo-4"></div>
<div class="logo logo-primary logo-5"></div>
        `}
    />
    <h2 className="doc-section__subtitle">
      Flags
    </h2>
    <div className="p-t-1 p-b-1">
      <div className="flag flag-default logo-5" />
    </div>
    <div className="p-t-1 p-b-1">
      <div className="flag flag-info logo-5" />
    </div>
    <Refractor
      language="markup"
      value={`
<div class="flag flag-default logo-5"></div>
<div class="flag flag-info logo-5"></div>
        `}
    />

  </section>
);

export default Logos;
