import Head from 'next/head'

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <script src="https://kit.fontawesome.com/e641e1045a.js" />

      <link rel="stylesheet" type="text/css" href="/static/styles.css" />
      <title>Havish Netla</title>
    </Head>
    <style jsx global>
      {`
        @media (min-width: 576px) {
          body {
            max-width: 540px;
          }
        }
        @media (min-width: 768px) {
          body {
            max-width: 720px;
          }
        }
        @media (min-width: 992px) {
          body {
            max-width: 960px;
          }
        }

        body {
          font-family: roboto;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;
        }
        .label {
          font-size: 30px;
        }
      `}
    </style>
    <div>{children}</div>
  </div>
)
export default Layout
