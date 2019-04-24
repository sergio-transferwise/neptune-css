import Document, { Html, Head, Main, NextScript } from 'next/document';

import {getAssetPath} from '../doc-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href={getAssetPath('favicon.ico')} />
          <link href={getAssetPath("css/neptune.css")} rel="stylesheet" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
