import { Amplify } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import config from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'
Amplify.configure(config)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withAuthenticator(MyApp)
