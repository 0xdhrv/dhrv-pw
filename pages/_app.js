import App from 'next/app'

// import '@styles/global.css'
import '@styles/global.css'
import { ThemeProvider } from 'next-themes'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider disableTransitionOnChange defaultTheme="dark">
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
