/* eslint-disable react/prop-types */
import React from 'react'

import Page from '@components/page'
import Link from '@design/link'

export default function Custom404() {
  return (
    <Page title="404" showHeader={false} footer={false}>
      <article>
        <div>
          <h1>
            404<span className="gr-b"> Error </span>
          </h1>
          <p>
            That is beyond my space. You can check my other internet addresses
            here :{' '}
            <Link href="/" underline>
              home
            </Link>
          </p>
        </div>
      </article>
    </Page>
  )
}
