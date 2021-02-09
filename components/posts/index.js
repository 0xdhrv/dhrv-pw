/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'

import PostHeader from '@design/entry/postHeader'
import styles from './posts.module.css'

const Posts = ({ slug, posts, paginate }) => {
  const [showMore, setShowMore] = useState(3)
  const options = { month: 'short', day: 'numeric' }

  return (
    <div className={styles.container}>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString('default', options)

        return (
          <PostHeader
            key={`post-item-${post.slug}`}
            href="/blog/[slug]"
            as={`/blog/${post.slug}`}
            title={post.title}
            date={date}
            description={post.description}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 3)
          }}
          className={styles.button}
        >
          Show More
        </button>
      )}
    </div>
  )
}

export default Posts
