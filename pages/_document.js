import Document, { Head, Main, NextScript } from 'next/document'

/*
NOTE: THIS RENDERS ON THE SERVER. DO NOT USE REACT.
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/
// TODO: For further inspiration / SEO
// https://github.com/deptno/next.js-typescript-starter-kit/blob/master/pages/_document.tsx
export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link id='SCSS' rel='stylesheet' href='/_next/static/style.css' />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
