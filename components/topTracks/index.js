import React from 'react'
import useSWR from 'swr'

import fetcher from '@library/fetcher'
// import Skeleton from './skeleton'

import Track from '@design/track'
import Skeleton from '@design/skeleton'

const TopTracks = () => {
  const { data } = useSWR('/api/top-tracks', fetcher)

  if (!data) {
    return <Skeleton />
  }

  return data.tracks.map((track, index) => (
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  ))
}

export default TopTracks
