import Skill from '../Skill'
import AwardHeader from '../Award/AwardHeader'
import Award from '../Award/Award'
import Badge from '../Badge'
import Project from './Project'

export default function Index() {
  return (
    <Project name="InsightAI" date="September 2019">
      <AwardHeader />

      <Award>
        <>
          Top 10 out of 240 college level teams
          <Badge color="orange">PennApps 2019</Badge>
        </>
      </Award>
      <Award>
        <>
          Best hack that helped the community
          <Badge color="orange">CBRE</Badge>
        </>
      </Award>
      <p>
        Deep learning live object and depth recognition with binaural AR audio
        spatialization and text-to-speech to help the visually impaired see the
        world with sound using only a smartphone and headphones
      </p>
      <div className="skills">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#efb838" skill="Tensorflow" />
        <Skill small color="#71b6d5" skill="Machine Learning" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f4d97a" skill="UI/UX" />
      </div>
      <img className="projectImage" src="/static/InsightAI.png" alt="" />
    </Project>
  )
}
