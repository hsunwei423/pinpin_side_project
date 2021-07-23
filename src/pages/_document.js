import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            ref="preload"
            href="/fonts/BalooTamma2-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            ref="preload"
            href="/fonts/BalooTamma2-Medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
};

export default MyDocument;