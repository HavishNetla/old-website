import Head from 'next/head'
import DarkToggle from './DarkToggle'

const themes = {
  light: {
    bodyBg: 'white',
    fontColor: 'black',
    shadowrgb: 'rgba(0, 0, 0, 0.6)',
  },
  dark: {
    bodyBg: 'black',
    fontColor: 'white',
    shadowrgb: 'rgba(255, 255, 255, 0.6)',
  },
}

class Layout extends React.Component {
  state = {
    activeTheme: 'light',
  }

  setTheme = () => {
    if (this.state.activeTheme === 'light') {
      this.setState({ activeTheme: 'dark' })
    } else {
      this.setState({ activeTheme: 'light' })
    }
  }

  render() {
    const { children } = this.props
    const { activeTheme } = this.state
    const theme = themes[activeTheme]

    return (
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
              transition: background-color 0.2s ease 0s, color 0.2s ease 0s;
              background-color: ${theme.bodyBg};
              font-family: roboto;
              margin-left: auto;
              margin-right: auto;
              padding-left: 15px;
              padding-right: 15px;
            }
            .label {
              font-size: 30px;
            }
            p,
            h1,
            h3,
            h4,
            h5,
            h6,
            h7 {
              color: ${theme.fontColor};
            }

            i {
              color: ${theme.fontColor};
              padding: 0px 10px 0px 10px;
            }
            .profile {
              border-radius: 50%;
              height: 200px;
              box-shadow: 0px 24px 50px -15px ${theme.shadowrgb};
            }
          `}
        </style>
        <DarkToggle
          onClick={this.setTheme}
          activeTheme={this.state.activeTheme}
        />

        <div>{children}</div>
      </div>
    )
  }
}

export default Layout
