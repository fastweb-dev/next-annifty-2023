import '../styles/globals.css'

import React, { useEffect } from 'react'
import TagManager from 'react-gtm-module';
import SimpleReactLightbox from 'simple-react-lightbox'

const tagManagerArgs = {
  gtmId: 'GTM-W65ZMHS'
}

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
