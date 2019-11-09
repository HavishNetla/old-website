import Head from 'next/head'

export default class extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div style={{ height: '100%' }}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="Main page" content="Havish's personal website" />

          <link rel="stylesheet" type="text/css" href="/static/styles.css" />
          <script
            src="https://kit.fontawesome.com/e641e1045a.js"
            crossOrigin="anonymous"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />

          <title>Havish Netla</title>
        </Head>

        {children}
      </div>
    )
  }
}
