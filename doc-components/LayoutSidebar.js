import React, { Component } from 'react';
import {withRouter} from 'next/router'
import {default as Link} from 'next/link'

import * as layout from '../pages/layout'

const getLink = router => {
  return Object.values(layout).map(({displayName: name, isBeta}) => {
    const isSelected = router.pathname === `/layout/${name}`

    return (
      <li key={name}>
        <Link href={process.env.NODE_ENV === "production" ? `/neptune-css/branch/export/layout/${name}` : `/layout/${name}`}>
          <a className={`Nav__Link ${isSelected ? 'active' : ''}`}>
            {name}
            {' '}
            {isBeta && (
              <span className="badge badge-success">new</span>
            )}
          </a>
        </Link>
      </li>
    )
  })
}

class UtilitiesSidebar extends Component {
  render() {
    const { router } = this.props;

    return (
      <div className="Sidebar__Fixed">
        <div className="Sidebar__Header">
          <h3 className="Sidebar__Title">Layout</h3>
        </div>

        <div className="Sidebar__Inner">
          <ul className="Nav">
            {getLink(router)}
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(UtilitiesSidebar)
