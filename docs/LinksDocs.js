import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import './less/prism.css';

const Links = () => (
  <section id="links" className="container container--wide section">
    <h1 className="colored-dot doc-section__title">Links.</h1>
    <h2 className="doc-section__subtitle">Link callout</h2>
    <a href="" className="callout-container">
      <strong className="link-callout ">Pricing</strong>
    </a>
    <Refractor
      language="markup"
      value={`
<a href="" class="callout-container">
  <strong class="link-callout ">Pricing</strong>
</a>
       `}
    />
  </section>
);

export default Links;
