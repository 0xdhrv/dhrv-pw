/* eslint-disable react/prop-types */
import Head from '@components/head'
import Header from '@components/header'
import Footer from '@components/footer'

import styles from './page.module.css'

const Page = ({
  header = true,
  title,
  showHeader = true,
  showBack = false,
  footer = true,
  children
}) => {
  return (
    <>
      <Head title={`${title ? `${title} | ` : ''}Dhruv Suthar`} />
      <div className={styles.container}>
        {header && (
          <Header title={title} showHeader={showHeader} showBack={showBack} />
        )}
        <main className={styles.main}> {children} </main>
        {footer && <Footer />}
      </div>
    </>
  )
}

export default Page
