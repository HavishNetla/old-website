import FadeIn from 'react-fade-in'
import Layout from '../components/Layout'
import Skill from '../components/Skill'
import DarkToggle from '../components/DarkToggle'

export default function Index() {
  return (
    <Layout>
      <div style={{ transition: 'all 300ms ease 0s' }}>
        <div
          style={{ display: 'block', textAlign: 'center', paddingTop: '60px' }}
        >
          <img
            style={{}}
            src="/static/profile.jpg"
            alt="profile"
            className="profile"
          />
          <h1>Havish Netla</h1>
          <h6>
            <a
              className="sLink"
              href="mailto:netlahavish@gmail.com"
              aria-label="email"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="far fa-envelope" />
            </a>
            <a
              className="sLink"
              href="https://facebook.com/havish10"
              aria-label="facebook"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="fab fa-facebook-f" />
            </a>
            <a
              className="sLink"
              href="https://twitter.com/netlahavish"
              aria-label="twitter"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="fab fa-twitter" />
            </a>
            <a
              className="sLink"
              href="https://github.com/havish10"
              aria-label="github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="fab fa-github" />
            </a>
          </h6>
        </div>

        <div className="aboutMe" style={{ paddingTop: '15px' }}>
          <h1>About Me</h1>
          <p>
            Hello, my name is Havish Netla. I am currently a freshman in
            highschool. I specialize in frontend and backend development, image
            processing, and robotics.
          </p>
        </div>

        <div style={{ marginTop: '60px' }} className="technical">
          <h1>Technical Skills</h1>
          <div className="skills" style={{ display: 'flex' }}>
            <Skill skill="Javascript" />
            <Skill skill="Java" />
            <Skill skill="Python" />
            <Skill skill="Kotlin" />
            <Skill skill="React" />
            <Skill skill="Express" />
            <Skill skill="OpenCV" />
            <Skill skill="Robotics" />
          </div>
        </div>

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
