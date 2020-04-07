import Award from '../Award/Award'
import Skill from '../Skill'
import Project from './Project'
import AwardHeader from '../Award/AwardHeader'
import Badge from '../Badge'

export default () => (
  <Project name="SupplySmart" date="April 2020">
    <AwardHeader />
    <Award>
      1st Place of 140 University Teams
      <Badge color="orange">HooHacks 2020</Badge>
      <Badge color="aqua">Finance Track</Badge>
    </Award>

    <p>
      Deep learning natural language processing based supply and demand analysis
      and prediction of essential items displayed on a personalized and
      intuitive web application
    </p>

    <div className="skills">
      <Skill small color="#f0d91d" skill="Javascript" />
      <Skill small color="#6ea260" skill="Node.js" />
      <Skill small color="#f04a00" skill="Rust" />
      <Skill small color="#356f9f" skill="Python" />
      <Skill small color="#5ed4f4" skill="React" />
      <Skill small color="#efb838" skill="Tensorflow" />
      <Skill small color="#71b6d5" skill="Machine Learning" />
      <Skill small color="#000000" skill="Express" />
      <Skill small color="#f4d97a" skill="UI/UX" />
      <Skill small color="#c5c5c5" skill="Systems Engineering" />
    </div>

    <img
      style={{
        width: '50%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        transition: 'transform 0.2s',
      }}
      src="https://media.discordapp.net/attachments/669326569306849280/696906847990317096/unknown.png?"
      alt=""
    />
  </Project>
)
