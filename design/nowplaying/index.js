/* eslint-disable no-undef */
import React from 'react'
import useSWR from 'swr'

import fetcher from '@library/fetcher'

import Link from '@design/link'

import styles from './nowplaying.module.css'

const NowPlaying = () => {
  const { data } = useSWR('/api/now-playing', fetcher)
  return (
    <div className={styles.container}>
      <div isLoaded={data}>
        <img
          className={styles.image}
          alt="Album Art"
          height={128}
          width={128}
          src={data?.albumImageUrl || '/icons/pause.svg'}
        />
      </div>
      <div className={styles.song}>
        <p className={styles.title}>
          <Link href={data?.songUrl} external underline>
            {data && (data?.title || 'not playing')}
          </Link>
        </p>
        <p>{data && (data?.artist || '')}</p>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default NowPlaying
