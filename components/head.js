/* eslint-disable react/prop-types */
import NextHead from 'next/head'
import { useTheme } from 'next-themes'
import splitbee from '@splitbee/web'

const defaultOgImage =
  'https://res.cloudinary.com/dhrv/image/upload/v1602144615/resources/dhrv-Og.png'

if (global.document) {
  splitbee.init()
  splitbee.user.set({
    email: 'intelligentjimmy@gmail.com'
  })
  const info = [
    `Checkout code here : https://dhrv.pw/oss`,
    `Have a Good Day | Dhruv Suthar`
  ]

  for (const message of info) {
    // eslint-disable-next-line no-console
    console.log(message)
  }
}

const Head = ({
  title = 'Dhruv Suthar',
  description = 'Designer, Developer, and Minimalism.~ stuck b/w develop and deploy',
  image = defaultOgImage,
  children
}) => {
  const { systemTheme } = useTheme()

  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel="preload"
        href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://dhrv.pw" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@0xdhrv" />
      <meta name="apple-mobile-web-app-title" content="Dhrv" />
      <meta name="author" content="Dhruv Suthar" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for dhrv.pw"
        href="/feed.xml"
      />

      {/* Favicons */}
      <link rel="manifest" href="/favicons/manifest.json" />
      <meta name="theme-color" content="#000000" />
      <link rel="mask-icon" href="/favicons/pinned.svg" color="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />

      {/* Dynamic favicon */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  )
}

export default Head
