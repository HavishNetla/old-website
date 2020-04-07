import Project from '../DV/Project'
import AwardHeader from '../Award/AwardHeader'
import Award from '../Award/Award'
import Skill from '../Skill'
import Badge from '../Badge'
import Button from '../Button'

export default () => (
  <Project name="SkyStone" date="2019-20">
    <AwardHeader />
    <Award>
      1st Place
      <Badge color="orange"> Maryland State Championship</Badge>
      <Badge color="aqua">Record of 5-0-0</Badge>
    </Award>
    <Award>
      1st Place
      <Badge color="orange"> Maryland State Championship</Badge>
      <Badge color="aqua">Record of 5-0-0</Badge>
    </Award>
    <Award>
      1st Place
      <Badge color="orange"> Virginia State Championship</Badge>
      <Badge color="aqua">Record of 5-0-0</Badge>
    </Award>
    <Award>
      2nd Place
      <Badge color="orange">Inspire Award</Badge>
      <Badge color="lime">Highest Award for overall performance</Badge>
      <Badge color="aqua">Maryland State Championship</Badge>
    </Award>
    <Award>
      1st Place
      <Badge color="orange">Think Award</Badge>
      <Badge color="lime">Second Highest Award for documentation</Badge>
      <Badge color="aqua">Virginia State Championship</Badge>
    </Award>
    <Award>
      1st Place
      <Badge color="orange">Think Award</Badge>
      <Badge color="lime">Second Highest Award for documentation</Badge>
      <Badge color="aqua">Maryland State Championship</Badge>
    </Award>
    <Award>
      Finalist
      <Badge color="orange">Design Award</Badge>
      <Badge color="lime">Award for Overall Design of the Robot</Badge>
      <Badge color="aqua">Maryland State Championship</Badge>
    </Award>

    <p>
      In SkyStone, the goal of the game is to deliver rectangular prism stones
      from a depot area into a foundation area. At the foundation the Robot must
      stack the stones as high as it can and at the end of the match the Robot
      must move the foundation out of the building area and place a special
      stone on the very top, to accomplish this we used dual cage ball bearing
      linear slides for our stacking system, and a dual side quad compliant
      wheel intake to intake the stones.
    </p>

    <p>
      This was my first year using Kotlin and Java simultaneously to program the
      robot. Additionally this year I utilized advanced odometry and path
      following techniques that allowed us to create one of the best autonomous
      programs in the state of Maryland and Virgina.
    </p>
    <div style={{ display: 'flex' }}>
      <Button>
        <a href="https://havish.dev/static/papers/Three%20Wheel%20Localization.pdf">
          Odometry White Paper
        </a>
      </Button>
      <Button>
        <a href="https://havish.dev/static/papers/Pure%20Pursuit.pdf">
          Pure Pursuit White Paper
        </a>
      </Button>
    </div>

    <p>
      My team had great success this year coming 1st in the Maryland
      Championship and 1st at the Virigina State Championship and advanced to
      the World Championship in Detroit. Unfortunately the World Championship
      was canceled due to COVID-19
    </p>

    <div className="skills">
      <Skill small color="#f89917" skill="Java" />
      <Skill small color="#d3647e" skill="Kotlin" />
      <Skill small color="#ecc23d" skill="Robotics" />
      <Skill small color="#30dd81" skill="Android Development" />
      <Skill small color="#f80101" skill="OpenCV" />
      <Skill small color="#c5c5c5" skill="Systems Engineering" />
    </div>

    <img className="projectImage" src="/static/SS.png" alt="" />

    <style>{`
    a {
        color: inherit;
        text-decoration:none; 
    }
`}</style>
  </Project>
)
