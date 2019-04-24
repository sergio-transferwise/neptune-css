import React, { Component } from 'react';
import {withRouter} from 'next/router'
import {default as Link} from 'next/link'

import * as components from '../pages/components'

const getLink = router => {
  return Object.values(components).map(({displayName: name}) => {
    const isSelected = router.pathname === `/components/${name}`

    return (
      <li key={name}>
        <Link href={`/components/${name}`}>
          <a className={`${isSelected ? 'active' : null}`}>{name}</a>
        </Link>
      </li>
    )
  })
}

class ComponentsSidebar extends Component {
  render() {
    const { router } = this.props;

    return (
      <>
        <h3>Components</h3>
        {getLink(router)}
      </>
    )
  }
}

export default withRouter(ComponentsSidebar)
