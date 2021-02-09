import React from 'react'
import Link from '@design/link'

import styles from './track.module.css'

const Track = (track) => {
  // track.ranking
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        alt="Album Art"
        height={128}
        width={128}
        src={track.albumImageUrl || '/icons/pause.svg'}
      />
      <div className={styles.song}>
        <p className={styles.title}>
          <Link href={track.songUrl} external underline>
            {track.title}
          </Link>
        </p>
        <p>{track.artist}</p>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default Track
