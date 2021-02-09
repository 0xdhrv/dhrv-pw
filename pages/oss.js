import Page from '@components/page'
import Link from '@design/link'

const OSS = () => {
  return (
    <Page title="Open Source" showHeader={false} footer={false}>
      <article>
        <div>
          <h1>
            Open<span className="gr-b"> Source</span>{' '}
          </h1>
        </div>
        <p>
          this website is built using{' '}
          <Link href="https://nextjs.org" external underline>
            Next.js
          </Link>{' '}
          and designed with CSS Modules
          <br />
          and hosted on{' '}
          <Link href="https://vercel.com" external underline>
            Vercel
          </Link>{' '}
          and open sourced on{' '}
          <Link href="https://github.com/0xdhrv/dhrv-pw" external underline>
            Github
          </Link>
          {' .'}
        </p>
        <p>
          contact me for any suggestions or help{' '}
          <Link href="/contact" external underline>
            here
          </Link>
        </p>
        <p>
          Check my other work on{' '}
          <Link href="https://git.dhrv.pw/" external underline>
            git.dhrv.pw
          </Link>{' '}
          and linux blog on{' '}
          <Link href="https://blog.dhrv.pw/" external underline>
            blog.dhrv.pw
          </Link>
          {' .'}
        </p>
      </article>
    </Page>
  )
}

export default OSS
