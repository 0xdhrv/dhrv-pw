/* eslint-disable react/prop-types */
import Head from 'next/head'

import Navigation from './navigation'
import Page from '@components/page'
import styles from './post.module.css'

// function escapeHtml(unsafe) {
//   return unsafe
//     .replace(/&/g, '&amp;')
//     .replace(/</g, '&lt;')
//     .replace(/>/g, '&gt;')
//     .replace(/"/g, '&quot;')
//     .replace(/'/g, '&#039;')
// }

const Post = ({
  title,
  slug,
  html,
  hidden,
  og,
  description,
  date,
  previous,
  next
}) => {
  const readingTime = require('reading-time')
  const stats = readingTime(html)
  return (
    <Page
      slug={slug}
      title={title}
      description={description}
      showHeader={false}
      showBack={true}
      image={
        og && og === true
          ? `https://res.cloudinary.com/dsdlhtnpw/image/upload/${slug}.png`
          : og
      }
    >
      <Head>
        {hidden && <meta name="robots" content="noindex" />}
        {date && <meta name="date" content={date} />}
      </Head>

      <article>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.container}>
          <span className={styles.date}>{date}</span>
          <span className="space"></span>
          <span className={styles.time}>{stats.text}</span>
        </div>
      </article>

      <article
        className={styles.main}
        dangerouslySetInnerHTML={{
          __html: `${html}`
        }}
      />

      <Navigation previous={previous} next={next} />
    </Page>
  )
}

export default Post
