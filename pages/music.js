import Page from '@components/page'
import TopTracks from '@components/topTracks'

import NowPlaying from '@design/nowplaying'

const Music = () => {
  return (
    <Page title="Music" showHeader={false}>
      <article>
        <div>
          <h1>Music</h1>
          <p>
            Mostly, Lo-Fi, Deep House and Intrumentals. Here are the top tracks
            that I listen and what I might be listening right now.
          </p>
        </div>
        <div>
          <h2>Top Tracks</h2>
        </div>
        <TopTracks />
        <div>
          <h2>Now Playing</h2>
        </div>
        <NowPlaying />
      </article>
    </Page>
  )
}

export default Music
