import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import theme from 'src/theme'
import createEmotionCache from 'src/createEmotionCache'
import { EmotionCache } from '@emotion/utils'
import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    </CacheProvider>
  )
}
export default MyApp
