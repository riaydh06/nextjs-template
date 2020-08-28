import React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
const getIconPath = (size) => `/fav/favicon_${size}.png`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href={getIconPath(32)} sizes="32x32" />
          <link rel="icon" href={getIconPath(128)} sizes="128x128" />
          <link rel="icon" href={getIconPath(192)} sizes="192x192" />

          <link rel="shortcut icon" href={getIconPath(196)} sizes="196x196" />

          <link
            rel="apple-touch-icon"
            href={getIconPath(152)}
            sizes="152x152"
          />
          <link
            rel="apple-touch-icon"
            href={getIconPath(167)}
            sizes="167x167"
          />
          <link
            rel="apple-touch-icon"
            href={getIconPath(180)}
            sizes="180x180"
          />
          <link rel="manifest" href="/manifest.json" />
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
