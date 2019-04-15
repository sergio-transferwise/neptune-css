import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const Alerts = () => (
  <section id="alerts" className="container--wide section">
    <h1 className="colored-dot doc-section__title">Alerts</h1>

    <p className="lead">
Provide contextual feedback messages for typical user
      actions with the handful of available and flexible alert messages.
    </p>

    <h2 className="doc-section__subtitle">
Examples
    </h2>
    <p>
Wrap any text and an optional dismiss button in
      <code>.alert</code>
      {' '}
and one of the four contextual classes (e.g.,
      <code>.alert-success</code>
) for basic alert messages.
    </p>

    <div className="alert alert-info-info">
      <h4>No default class</h4>
      <p>
      Alerts don't have default classes, only base and modifier classes. A default gray alert doesn't make too much sense, so you're required to specify a type via contextual class. Choose from success, info, warning, or danger.
      </p>
    </div>

    <div className="bs-example">
      <div className="alert alert-success" role="alert">
        <strong>Well done!</strong>
        {' '}
You successfully read this important alert message.
      </div>
      <div className="alert alert-info arrow" role="alert">
        <strong>Heads up!</strong>
        {' '}
This alert needs your attention, but it's not super important.
      </div>
      <div className="alert alert-warning" role="alert">
        <strong>Warning!</strong>
        {' '}
Better check yourself, you're not looking too good.
      </div>
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong>
        {' '}
Change a few things up and try submitting again.
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
        <div class="alert alert-success" role="alert">...</div>
        <div class="alert alert-info" role="alert">...</div>
        <div class="alert alert-warning" role="alert">...</div>
        <div class="alert alert-danger" role="alert">...</div>
       `}
    />
    <h2 className="doc-section__subtitle">
Dismissible alerts
    </h2>
    <p>
Build on any alert by adding an optional
      <code>.alert-dismissible</code>
      {' '}
and close button.
    </p>
    <div className="alert alert-info" id="callout-alerts-dismiss-plugin">
      <h4>Requires JavaScript alert plugin</h4>
      <p>
For fully functioning, dismissible alerts, you must use the
        <a href="../javascript/#alerts">alerts JavaScript plugin</a>
.
      </p>
    </div>
    <div className="bs-example" data-example-id="dismissible-alert-css">
      <div className="alert alert-warning alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
        <strong>Warning!</strong>
        {' '}
Better check yourself, you're not looking too good.
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
        <div class="alert alert-warning alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <strong>Warning!</strong> Better check yourself, you're not looking too good.
        </div>
       `}
    />
    <div className="alert alert-warning" id="callout-alerts-dismiss-use-button">
      <h4>Ensure proper behavior across all devices</h4>
      <p>
Be sure to use the
        <code>&lt;button&gt;</code>
        {' '}
element with the
        <code>data-dismiss=`alert`</code>
        {' '}
data attribute.
      </p>
    </div>

    <h2 className="doc-section__subtitle">
Connecting alerts
    </h2>
    <p>
Use the
      <code>.arrow</code>
      {' '}
classes to visually attach alerts to other elements.
    </p>
    <div className="bs-example" data-example-id="alerts-with-links">
      <div className="alert alert-success arrow" role="alert">
        <strong>Well done!</strong>
        {' '}
You successfully read this important alert message.
      </div>
      <div className="alert alert-info arrow arrow-right" role="alert">
        <strong>Heads up!</strong>
        {' '}
This alert needs your attention, but it is not super important.
      </div>
      <div className="alert alert-warning arrow arrow-bottom arrow-center" role="alert">
        <strong>Warning!</strong>
        {' '}
Better check yourself, you are not looking too good.
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
        <div class="alert alert-success arrow" role="alert">...</div>
        <div class="alert alert-info arrow arrow-right" role="alert">...</div>
        <div class="alert alert-warning arrow arrow-bottom arrow-center" role="alert">...</div>
       `}
    />
    <h2 className="doc-section__subtitle">
Links in alerts
    </h2>
    <p>
Use the
      <code>.alert-link</code>
      {' '}
utility class to quickly provide matching colored links within any alert.
    </p>
    <div className="bs-example" data-example-id="alerts-with-links">
      <div className="alert alert-success" role="alert">
        <strong>Well done!</strong>
        {' '}
You successfully read
        <a href="#" className="alert-link">this important alert message</a>
.
      </div>
      <div className="alert alert-info" role="alert">
        <strong>Heads up!</strong>
        {' '}
This
        <a href="#" className="alert-link">alert needs your attention</a>
, but it's not super important.
      </div>
      <div className="alert alert-warning" role="alert">
        <strong>Warning!</strong>
        {' '}
Better check yourself, you're
        <a href="#" className="alert-link">not looking too good</a>
.
      </div>
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong>
        {' '}
        <a href="#" className="alert-link">Change a few things up</a>
        {' '}
and try submitting again.
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
        <div class="alert alert-success" role="alert">
          <a href="#" class="alert-link">...</a>
        </div>
        <div class="alert alert-info" role="alert">
          <a href="#" class="alert-link">...</a>
        </div>
        <div class="alert alert-warning" role="alert">
          <a href="#" class="alert-link">...</a>
        </div>
        <div class="alert alert-danger" role="alert">
          <a href="#" class="alert-link">...</a>
        </div>
       `}
    />
  </section>
);

export default Alerts;
