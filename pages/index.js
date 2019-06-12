import FadeIn from 'react-fade-in'
import Layout from '../components/Layout'
import Skill from '../components/Skill'
import DarkToggle from '../components/DarkToggle'

export default function Index() {
  return (
    <Layout>
      <div
        style={{ display: 'block', textAlign: 'center', paddingTop: '60px' }}
      >
        <FadeIn>
          <img
            style={{
              transition: 'transform .2s',
            }}
            src="/static/profile.jpg"
            alt="profile"
            className="profile"
          />
          <h1>Havish Netla</h1>
          <h6>
            <a
              className="sLink"
              href="mailto:netlahavish@gmail.com"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="far fa-envelope" />
            </a>
            <a
              className="sLink"
              href="https://facebook.com/havish10"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="fab fa-facebook-f" />
            </a>
            <a
              className="sLink"
              href="https://twitter.com/netlahavish"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="fab fa-twitter" />
            </a>
            <a
              className="sLink"
              href="https://github.com/havish10"
              target="_blank"
            >
              <i style={{ fontSize: '24px' }} className="fab fa-github" />
            </a>
          </h6>
        </FadeIn>
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
        <div
          className="skills"
          style={{
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          <Skill
            skill="javascript"
            color="#f7df1e"
            url="/static/javascript.png"
          />
          <Skill skill="java" color="#00768f" url="/static/java.jpg" />
          <Skill skill="python" />
          <Skill skill="kotlin" />
        </div>
        <div
          className="skills"
          style={{
            flexWrap: 'wrap',
            textAlign: 'center',
          }}
        >
          <Skill skill="react" />
          <Skill skill="express" />
          <Skill skill="openCV" />
          <Skill skill="robotics" />
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
    </Layout>
  )
}
