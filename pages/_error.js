/* eslint-disable react/prop-types */
import React from 'react'

import Page from '@components/page'

class E extends React.Component {
  static getInitialProps({ res, err }) {
    const status = res ? res.statusCode : err ? err.statusCode : null
    return { status }
  }

  render() {
    const { status } = this.props
    return (
      <Page title={status} showHeader={false} footer={false}>
        <article>
          <div>
            <h1>{status}</h1>
          </div>
        </article>
      </Page>
    )
  }
}

export default E
