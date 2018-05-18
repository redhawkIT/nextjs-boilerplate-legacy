import Document, { Head, Main, NextScript } from 'next/document'

/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/
export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
