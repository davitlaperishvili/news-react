import '@/source/scss/base/_root.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  )
}
