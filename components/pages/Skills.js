import Skill from '../Skill'

export default () => (
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
)
