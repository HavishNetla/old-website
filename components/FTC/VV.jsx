import Project from '../DV/Project'
import AwardHeader from '../Award/AwardHeader'
import Award from '../Award/Award'
import Skill from '../Skill'
import Badge from '../Badge'

export default () => (
  <Project name="Velocity Vortex" date="2016-17">
    <AwardHeader />
    <Award>
      2nd Place
      <Badge color="orange">World Championship</Badge>
      <Badge color="aqua">Record of 8-1-0</Badge>
    </Award>
    <Award>
      Semi Finalist
      <Badge color="orange">East Super Regional Tesla Division</Badge>
      <Badge color="aqua">Record of 8-1-0</Badge>
    </Award>
    <Award>
      2nd Place
      <Badge color="orange"> Delaware State Championship</Badge>
    </Award>
    <Award>
      2nd Place
      <Badge color="orange"> Maryland State Championship</Badge>
      <Badge color="aqua">Record of 4-1-0</Badge>
    </Award>

    <p>
      I was in 7th grade when I started participating in the FIRST Tech
      Challenge RObotics Competition, and my first game was Velocity Vortex. The
      goal of Velocity Vortex was to shoot 3 inch wiffle balls 4 feet into the
      air, and into a "vortex" structure. To do this we created a dual flywheel
      system that utilized a perfectly shaped arc to launch the ball 4 feet in
      the air. Using Java and an on board Android phone we control the dozens of
      DC Motors and sensors on the robot to do autonomous tasks and compete in
      the tele-op controlled period.
    </p>
    <p>
      My team had great success this year coming 2nd in both the Delaware State
      Championship, and Maryland Championship. After we went to the East Super
      Regionals were we were a semi-finalist and advanced to the World
      Championship in St. Louis. At the World Championship we went 8-1 in
      qualification matches and won our divison, and placed 2nd in the world.
    </p>

    <div className="skills">
      <Skill small color="#f89917" skill="Java" />
      <Skill small color="#ecc23d" skill="Robotics" />
      <Skill small color="#30dd81" skill="Android Development" />
      <Skill small color="#c5c5c5" skill="Systems Engineering" />
    </div>

    <img className="projectImage" src="/static/vv.jpg" alt="" />
  </Project>
)
