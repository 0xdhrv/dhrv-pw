import Page from '@components/page'

import Link from '@design/link'
import ContactForm from '@design/contactform'

const Contact = () => {
  return (
    <Page title="Contact" showHeader={false}>
      <article>
        <div>
          <h1>Contact</h1>
          <p>
            Get in touch on{' '}
            <Link href="/socials" underline>
              socials
            </Link>
            .
          </p>
          <p>
            <Link href="mailto:hi@dhv.pw?subject=Hello" underline>
              hi @ dhrv · pw
            </Link>
          </p>
        </div>
        <ContactForm />
      </article>
    </Page>
  )
}

export default Contact
