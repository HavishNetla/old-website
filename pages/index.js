import FadeIn from 'react-fade-in'
import { Container, Row, Col } from 'react-grid-system'
import Layout from '../components/Layout'
import Skill from '../components/Skill'

export default function Index() {
  return (
    <Layout>
      <div
        style={{ display: 'block', textAlign: 'center', paddingTop: '60px' }}
      >
        <FadeIn>
          <img
            style={{
              borderRadius: '50%',
              height: '200px',
              boxShadow: '0px 24px 50px -15px rgba(0, 0, 0, 0.6)',
            }}
            src="/static/profile.jpg"
            alt="profile"
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
          proccesing, and robotics.
        </p>
      </div>

      <div style={{ marginTop: '60px' }} className="technical">
        <h1>Technical Skills</h1>
        <Container>
          <Row>
            <Col md={1.5}>
              <Skill skill="Javascript" />
            </Col>
            <Col md={1.5}>
              <Skill skill="Java" />
            </Col>
            <Col md={1.5}>
              <Skill skill="Python" />
            </Col>
            <Col md={1.5}>
              <Skill skill="Kotlin" />
            </Col>
            <Col md={1.5}>
              <Skill skill="React" />
            </Col>
            <Col md={1.5}>
              <Skill skill="Express" />
            </Col>
            <Col md={1.5}>
              <Skill skill="OpenCV" />
            </Col>
            <Col md={1.5}>
              <Skill skill="Robotics" />
            </Col>
          </Row>
        </Container>
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
        />
      </div>
    </Layout>
  )
}
