import Page from '@components/page'
import Link from '@design/link'

const Index = () => {
  return (
    <Page title="Home" showHeader={false} footer={false}>
      <article>
        <div>
          <h1>Dhruv Suthar</h1>
        </div>
        <p>
          beginner frontend developer and designer,
          <br />
          intermediate linux evangelist and ricer,
          <br />
          minimalism ~ monochromes ~ instrumentals
        </p>
      </article>
      <article>
        {/* <h2 className="flex-center"></h2> */}
        <p>
          I write about{' '}
          <Link href="/blog" underline>
            Designs
          </Link>{' '}
          and{' '}
          <Link href="https://blog.dhrv.pw/" external underline>
            Linux
          </Link>
          <br />
          Looking for Instrumentals in Modern{' '}
          <Link href="/music" underline>
            Music
          </Link>
          <br />
          Occasionally, I do Generative{' '}
          <Link href="sketches" underline>
            Sketches
          </Link>
        </p>
      </article>
      <article>
        <div>
          <h2>more</h2>
        </div>
        <p>
          contact{' '}
          <Link href="/contact" underline>
            me
          </Link>{' '}
          read{' my : '}
          <Link href="/musings" underline>
            musings
          </Link>
          {', and '}
          <Link href="/blog" underline>
            blog
          </Link>
        </p>
      </article>
    </Page>
  )
}

export default Index
