import Layout from '../components/Layout'
import Intro from '../components/Intro'
import DeltaV from '../components/DV/DeltaV'
import Nav from '../components/Nav'
import Skills from '../components/Skills'

export default class Index extends React.Component {
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
    return (
      <Layout>
        <meta
          name="theme-color"
          content={this.state.scrollPos > 600 ? '#ffffff' : '#000000'}
        />
        <div>
          <Nav scrollPos={this.state.scrollPos} />
          <div>
            <Intro />
            <Skills />
            <DeltaV />
          </div>
        </div>
        <style jsx>{`
          i {
            font-size: 25px;
            margin: 50px 0px 10px 25px;
            width: 100%;
          }
        `}</style>
      </Layout>
    )
  }
}
