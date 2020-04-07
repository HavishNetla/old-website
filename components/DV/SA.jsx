import Award from '../Award/Award'
import Skill from '../Skill'
import Project from './Project'
import AwardHeader from '../Award/AwardHeader'
import Badge from '../Badge'

export default function Index() {
  return (
    <Project name="Rocket Launch App" date="October 2018">
      <AwardHeader />
      <Award>
        2nd Place
        <Badge color="orange">Space Apps Baltimore</Badge>
        <Badge color="aqua">Global Nominee</Badge>
      </Award>

      <p>
        Rocket Launch is an intuitive web application that allows the user plan
        seeing rocket launches. The software displays future rocket launch data,
        international launch sites, and atmospheric conditions.
      </p>

      <div className="skills">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#356f9f" skill="Python" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#efb838" skill="Tensorflow" />
        <Skill small color="#71b6d5" skill="Machine Learning" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f4d97a" skill="UI/UX" />
      </div>

      <img className="projectImage" src="/static/RocketLaunch.png" alt="" />
    </Project>
  )
}
