import Project from '../DV/Project'
import AwardHeader from '../Award/AwardHeader'
import Award from '../Award/Award'
import Skill from '../Skill'
import Badge from '../Badge'

export default () => (
  <Project name="Rover Ruckus" date="2018-19">
    <AwardHeader />
    <Award>
      2nd Place
      <Badge color="orange">World Championship</Badge>
    </Award>
    <Award>
      Finalist
      <Badge color="orange">Think Award</Badge>
      <Badge color="lime">Second Highest Award for documentation</Badge>
      <Badge color="aqua">World Championship</Badge>
    </Award>

    <Award>
      1st Place
      <Badge color="orange"> Maryland State Championship</Badge>
      <Badge color="aqua">Record of 4-1-0</Badge>
    </Award>
    <Award>
      2nd Place
      <Badge color="orange">Inspire Award</Badge>
      <Badge color="lime">Highest Award for overall performance</Badge>
      <Badge color="aqua">Maryland State Champtionship</Badge>
    </Award>
    <Award>
      1st Place
      <Badge color="orange">Think Award</Badge>
      <Badge color="lime">Second Highest Award for documentation</Badge>
      <Badge color="aqua">Maryland State Champtionship</Badge>
    </Award>
    <Award>
      Finalist
      <Badge color="orange">Innovate Award</Badge>
      <Badge color="lime">Award for innovation in the Robot</Badge>
      <Badge color="aqua">Maryland State Champtionship</Badge>
    </Award>
    <Award>
      Finalist
      <Badge color="orange">Design Award</Badge>
      <Badge color="lime">Award for Overall Design of the Robot</Badge>
      <Badge color="aqua">Maryland State Champtionship</Badge>
    </Award>
    <Award>
      Finalist
      <Badge color="orange">Control Award</Badge>
      <Badge color="lime">Award for software</Badge>
      <Badge color="aqua">Maryland State Champtionship</Badge>
    </Award>

    <p>
      In Relic Recovery, the goal was to score 4in by 4in cubes into a structure
      in certain patterns, at the very end of the match the robot must pick up a
      relic and extend it 5 feet outside of the field. To do this we created a
      dual chain lift that was able to score two cubes at the time, the limit
      according to the rules, and a linear slide extension for the relic. Using
      Java and advanced object oriented design we were able to control the
      dozens of DC Motors and sensors. By the end of the season we had the best
      autonomous in the World.
    </p>
    <p>
      My team had great success this year coming 1st in the Maryland
      Championship and advanced to the World Championship in Detroit. At the
      World Championship we went 8-1 in qualification matches and won our
      divison, and placed 2nd in the world.
    </p>

    <div className="skills">
      <Skill small color="#f89917" skill="Java" />
      <Skill small color="#ecc23d" skill="Robotics" />
      <Skill small color="#30dd81" skill="Android Development" />
      <Skill small color="#f80101" skill="OpenCV" />
      <Skill small color="#c5c5c5" skill="Systems Engineering" />
    </div>

    <img className="projectImage" src="/static/RR2.png" alt="" />
  </Project>
)
