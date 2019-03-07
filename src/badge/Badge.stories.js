import React from "react";
import { storiesOf } from "@storybook/react";
import "./Badge.less";

storiesOf("Badge", module).add("default", () => (
  <section id="badge" className="wrap--content section">
    <h1 className="colored-dot">Badge</h1>
    <p className="lead">1kB minified</p>
    <p className="lead">Easily highlight new or unread items by adding a
      <code>{' <span class="badge">'}</code> to links, Bootstrap navs, and more.</p>
    <div className="doc-example">
      <a href="">Inbox <span className="badge">42</span></a>
      <code>{'<a href="#">Inbox <span class="badge">42</span></a>'}</code>
    </div>

    <h2 id="color">Color</h2>
    <p>Use <code>.badge-success</code> contextual class.</p>
    <div className="doc-example" data-example-id="badges-styles">
      <a href="">Inbox <span className="badge badge-success">new</span></a>
      <code>{'<a href="#">Inbox <span class="badge badge-success">new</span></a>'}</code>
    </div>

  </section>
));
