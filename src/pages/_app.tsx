import type { AppProps } from 'next/app'
// import { getLoggedUserId } from '../utils/getLoggedUserId'
import Layout from '../components/Layout/Layout';
import '../styles/globals.css'
import Navigation from '../components/Navigation/Navigation'



// Default way to get a logged user
// export const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navigation />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
