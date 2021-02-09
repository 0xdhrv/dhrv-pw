/* eslint-disable react/display-name */
import React from 'react'
import Page from '@components/page'
import dynamic from 'next/dynamic'

const P5Wrapper = dynamic(import('react-p5-wrapper'), {
  ssr: false,
  loading: () => (
    <div className="sketch-wrapper">
      <p>Making Sketches...</p>
    </div>
  )
})

import { data as items } from '@data/sketches.json'

class Sketches extends React.Component {
  render() {
    const sketches = items.map((sketch) => {
      const sketchObject = require(`../sketches/${sketch.url}`).default
      return (
        <div key={sketch.title} className="sketch-wrapper">
          <h4 className="sketchTitle">{sketch.title}</h4>
          <div className="space"></div>
          <P5Wrapper
            className="sketch"
            key={sketch.title}
            sketch={sketchObject(480, 480)}
          />
        </div>
      )
    })
    return (
      <Page title="Sketches" showHeader={false}>
        <article>
          <div>
            <h1>Sketches</h1>
            <p>My experiments with random generative art and noise loops.</p>
          </div>
          <div>{sketches}</div>
        </article>
      </Page>
    )
  }
}

export default Sketches
