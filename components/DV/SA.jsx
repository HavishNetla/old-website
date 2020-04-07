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
        News 451 is a minimalistic web application that allows users to see the
        recent news without clutter or ads. Users can gauge reliability and bias
        of their news using a custom trained machine learning model.
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

      <img className="projectImage" src="/static/News451.png" alt="" />
    </Project>
  )
}
