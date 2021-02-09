import Link from '@design/link'

import {
  Github,
  Twitter,
  Key,
  Instagram,
  Linkedin,
  Reddit,
  Facebook,
  Terminal,
  Photo
} from '@components/icons'

import styles from './socialbanner.module.css'

const SocialBanner = () => {
  return (
    <>
      <div className={styles.list}>
        <Link
          href="https://github.com/0xdhrv/"
          external
          className={styles.item}
        >
          <Github />
          <span className={styles.name}>0xdhrv</span>
        </Link>
        <Link
          href="https://twitter.com/0xdhrv/"
          external
          className={styles.item}
        >
          <Twitter />
          <span className={styles.name}>0xdhrv</span>
        </Link>
        <Link href="https://keybase.io/dhrv" external className={styles.item}>
          <Key />
          <span className={styles.name}>dhrv</span>
        </Link>
        <Link
          href="https://instagram.com/0xdhrv/"
          external
          className={styles.item}
        >
          <Instagram />
          <span className={styles.name}>0xdhrv</span>
        </Link>
      </div>
      <div className={styles.list}>
        <Link
          href="https://www.linkedin.com/in/0xdhrv/"
          external
          className={styles.item}
        >
          <Linkedin />
          <span className={styles.name}>0xdhrv</span>
        </Link>
        <Link
          href="https://www.reddit.com/user/0xdhrv/"
          external
          className={styles.item}
        >
          <Reddit />
          <span className={styles.name}>0xdhrv</span>
        </Link>
        <Link
          href="https://facebook.com/0xdhrv"
          external
          className={styles.item}
        >
          <Facebook />
          <span className={styles.name}>0xdhrv</span>
        </Link>
      </div>
      <div className={styles.list}>
        <Link
          href="https://vsco.co/fadeswithdhruv/gallery"
          external
          className={styles.item}
        >
          <Photo />
          <span className={styles.name}>fade with dhruv</span>
        </Link>
        <Link href="https://rizon.net/chat" external className={styles.item}>
          <Terminal />
          <span className={styles.name}>dhrv@irc.rizon.net</span>
        </Link>
      </div>
    </>
  )
}

export default SocialBanner
