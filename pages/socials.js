import Page from '@components/page'
import SocialBanner from '@components/socialbanner'

const Socials = () => {
  return (
    <Page title="Socials" showHeader={false}>
      <article>
        <div>
          <h1>Socials</h1>
          <p>Some of my internet addresses . : </p>
        </div>
        <div>
          <SocialBanner />
        </div>
      </article>
    </Page>
  )
}

export default Socials
