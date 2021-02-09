/* eslint-disable react/prop-types */
import React from 'react'

import Page from '@components/page'
import Posts from '@components/posts'
import getPosts from '@library/getPosts'

const Blog = ({ posts }) => {
  return (
    <Page title="Blog" description="Writing about design and code.">
      <article>
        <ul>
          <Posts posts={posts} />
        </ul>
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default Blog
