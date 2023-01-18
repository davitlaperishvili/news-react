import Metas from 'metas/Metas';
import { Html, Head, Main, NextScript } from 'next/document';
import Footer from '../../blocks/footer/Footer';
import Header from '../../blocks/header/Header';
import MainContainer from '../../layouts/MainContainer/MainContainer';
import PageWrapper from '../../layouts/PageWrapper';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Metas/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
