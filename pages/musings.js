/* eslint-disable react/prop-types */
import Page from '@components/page'
import getMarkdown from '@library/getMarkdown'

const Musings = ({ html }) => {
  return (
    <Page
      title="Musings"
      showHeader={false}
      description="Collection of notable quotes encountered in reading."
    >
      <article>
        <div>
          <h1>
            µsings ⌥<span className="gr-b">⎇ Musings </span>{' '}
          </h1>
        </div>
      </article>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  )
}

export const getStaticProps = async () => {
  const md = await getMarkdown('data/musings.md')

  return {
    props: {
      html: md
    }
  }
}

export default Musings
