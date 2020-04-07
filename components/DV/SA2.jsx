import Award from '../Award/Award'
import Skill from '../Skill'
import Project from './Project'
import AwardHeader from '../Award/AwardHeader'
import Badge from '../Badge'

export default function Index() {
  return (
    <Project name="InfernoAI" date="October 2019">
      <AwardHeader />
      <Award>
        1st Place
        <Badge color="orange">Space Apps 2019 Washington</Badge>
      </Award>
      <Award>
        1st Place
        <Badge color="orange">Space Apps 2019 Washington</Badge>
      </Award>
      <Award>
        Global Nominee
        <Badge color="orange">Space Apps 2019</Badge>
      </Award>

      <p>
        Machine Learning wildfire prediction platform that leverages NASA
        Satellite data and humidity data to predict possible future wildfires.
        The software allows users to monitor locations and alerts the user when
        there is a high risk of a wildfire.
      </p>

      <div className="skills">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#356f9f" skill="Python" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#efb838" skill="Tensorflow" />
        <Skill small color="#71b6d5" skill="Machine Learning" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f80101" skill="OpenCV" />
        <Skill small color="#f4d97a" skill="UI/UX" />
        <Skill small color="#c5c5c5" skill="Systems Engineering" />
      </div>

      <img className="projectImage" src="/static/InfernoAI.png" alt="" />
    </Project>
  )
}
