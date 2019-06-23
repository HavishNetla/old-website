import Layout from '../components/Layout'
import Intro from '../components/pages/Intro'
import Skills from '../components/pages/Skills'

export default function Index() {
  return (
    <Layout>
      <div style={{ transition: 'all 300ms ease 0s' }}>
        <Intro />
        <Skills />

        <div style={{ marginTop: '100px' }} className="projects">
          <h1 style={{ fontSize: '50px' }}>Projects</h1>

          <h2 style={{ fontSize: '40px' }}>News 451</h2>
          <p>
            News 451 is a minimalistic web application that allows users to see
            the recent news without clutter or ads. Users can gauge reliability
            and bias of their news using our custom machine learning model.
          </p>
          <img
            style={{ width: '100%' }}
            src="/static/GroupNews451Combined.png"
            alt="News 451"
            className="projectPic"
          />

          <h2 style={{ fontSize: '40px' }}>Rocket Launch App</h2>
          <p>
            Rocket Launch is an intuitive web application that allows the user
            plan seeing rocket launches. The software displays future rocket
            launch data, international launch sites, and atmospheric conditions.
          </p>
          <img
            style={{ width: '100%' }}
            src="/static/RocketLaunch.png"
            alt="News 451"
            className="projectPic"
          />
        </div>
      </div>
    </Layout>
  )
}
