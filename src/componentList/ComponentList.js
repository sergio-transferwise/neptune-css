import React, { Fragment } from 'react';
import './ComponentList.less';

const ComponentList = () => (
  <Fragment>
    <section className="wrap--content">
      <h1>Components index:</h1>
      <div className="d-flex justify-content-between wrap--container">
        <div>
          <h2>Core</h2>
          <ul>
            <li>
              <a href="#core">Core</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
            <li>
              <a href="#typography">Typography</a>
              <ul>
                <li>
                  <a href="#headings">Headings</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h2>Layout</h2>
          <ul>
            <li>
              <a href="#flex">Flex</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
            <li>
              <a href="#grid">Grid layout</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
            <li>
              <a href="#grid">Column system</a>
            </li>
            <li>
              <a href="#wrap">Wrapping</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Components</h2>
          <ul>
            <li>
              <a href="#badge">Badge</a>
            </li>
            <li>
              <a href="#navbar">Navbar</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Styling</h2>
          <ul>
            <li>
              <a href="#skew">Skew</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
            <li>
              <a href="#background">Background</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Fragment>
);
export default ComponentList;
