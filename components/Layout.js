import Head from 'next/head'

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Main page" content="Havish's personal website" />
      <script src="https://kit.fontawesome.com/e641e1045a.js" />

      <link rel="stylesheet" type="text/css" href="/static/styles.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <title>Havish Netla</title>
    </Head>

    <div style={{ margin: '15px' }}>
      <div style={{ maxWidth: '1000px', margin: 'auto' }}>{children}</div>
    </div>
  </div>
)
