import Head from 'next/head'

export default class extends React.Component {
  state = {
    scrollPos: null,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  scrollListener = () => {
    this.setState({
      scrollPos: window.pageYOffset,
    })

    if (this.state.scrollPos > 600) {
      document.body.style = 'background: white; color: black;'
    } else {
      document.body.style = 'background: black; color: white;'
    }
  }

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

          <title>Havish Netla</title>
        </Head>

        {children}
      </div>
    )
  }
}
