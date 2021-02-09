/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styles from './header.module.css'

import Link from '@design/link'
import Button from '@design/button'

import { Logo as LogoIcon } from '@components/icons'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import next from 'next'

const Header = ({ showHeader = true, title, showBack = false }) => {
  const [mounted, setMounted] = useState(false)
  const { theme: activeTheme, themes, setTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  const index = themes.indexOf(activeTheme)
  const next = themes[(index + 1) % themes.length]
  const now = themes[index % themes.length]

  if (!mounted) return null

  return (
    <>
      <header className={styles.header}>
        <Link href="/" aria-label="Home" className={styles.logo}>
          <LogoIcon />
        </Link>
        <div className="space"></div>
        <div className={styles.title}>{showHeader && title}</div>
        <div className="space"></div>
        <Button
          className={styles.switch}
          transparent
          onClick={(e) => {
            const index = themes.indexOf(activeTheme)
            const next = themes[(index + 1) % themes.length]
            setTheme(next)
          }}
        >
          {now} → {next}
        </Button>
      </header>
      <div className={styles.back}>
        {showBack && (
          <Link href="/blog" aria-label="Blog">
            ←
          </Link>
        )}
      </div>
    </>
  )
}

export default Header
