import React from 'react';
import Link from 'next/link'
import {withRouter} from 'next/router'
import getConfig from 'next/config'

import * as foundations from '../pages/foundations'
import * as layout from '../pages/layout'
import * as components from '../pages/components'
import * as utilities from '../pages/utilities'
import ComponentsSidebar from './ComponentsSidebar'

const pages = {
  ...foundations,
  ...layout,
  ...components,
  ...utilities,
}

const {pageMap} = getConfig().publicRuntimeConfig

const Layout = ({ children, router }) => {
  const {pathname} = router
  const filename = pageMap[pathname]
  if (!filename) {
    // eslint-disable-next-line no-console
    console.warn(`pathname "${pathname}" doesn't exist in pageMap:`, pageMap)
  }
  const isIndex = pathname === '/'

  const getPage = componentName => {
    return Object.values(pages)
      .find(n => n.displayName === componentName)
  }

  const foundation = getPage(pathname.replace('/foundations/', ''))
  const layout = getPage(pathname.replace('/layout/', ''))
  const component = getPage(pathname.replace('/components/', ''))
  const utilities = getPage(pathname.replace('/utilities/', ''))

  return (
    <>
      <div className="doc" id="top">
        <a href="#top" className="doc-go-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
            <title>up-arrow</title>
            <polygon
              fill="#2e4369"
              points="18.01 7.47 12 1.46 5.99 7.47 6.7 8.18 11.5 3.38 11.5 22 12.5
              22 12.5 3.38 17.3 8.18 18.01 7.47"
            />
          </svg>
        </a>

        <header>
          <ul>
            <li>
              <Link href="/foundations/Colours">
                <a className={`${foundation ? 'active' : null}`}>Foundations</a>
              </Link>{' '}
            </li>
            <li>
              <Link href="/layout/Flex">
                <a className={`${layout ? 'active' : null}`}>Layout</a>
              </Link>{' '}
            </li>
            <li>
              <Link href="/components/Alerts">
                <a className={`${component ? 'active' : null}`}>Components</a>
              </Link>{' '}
            </li>
            <li>
              <Link href="/utilities/Background">
                <a className={`${utilities ? 'active' : null}`}>Utilities</a>
              </Link>{' '}
            </li>
          </ul>
        </header>

        {component && (
          <ComponentsSidebar />
        )}

        {(foundation || layout || component || utilities) && (
          <h1 className="colored-dot">
            {foundation && foundation.displayName}
            {layout && layout.displayName}
            {component && component.displayName}
            {utilities && utilities.displayName}.
          </h1>
        )}

        {children}
      </div>
    </>
  )
}

export default withRouter(Layout)
