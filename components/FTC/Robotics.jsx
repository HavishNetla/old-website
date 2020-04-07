import SA from '../DV/SA'
import BS from '../DV/BS'
import PA from '../DV/PA'
import VV from './VV'
import RR1 from './RR1'
import RR2 from './RR2'

export default function Index() {
  return (
    <div className="container">
      <h1>
        FIRST Tech Challenge Team #8221 Cubix<sup>3</sup>
      </h1>
      <b>
        September 2016 - Present
        <br />
        World Standing: 7th out of 6000+
      </b>
      <p />
      <p>
        A team of highschoolers who participate in the FIRST Tech Challenge
        Robotics Competition. In this team I am the Software Development Lead
      </p>

      <hr />

      <RR2 />
      <RR1 />
      <VV />

      <style jsx>{`
        .container {
          padding-top: 200px;
          margin: auto;
          max-width: 900px;
        }
        h1 {
          font-size: 50px;
          margin-bottom: 10px;
        }
        h2 {
          font-size: 30px;
          margin-bottom: 10px;
        }
        ol {
          margin-top: 0px;
        }
        img {
          width: 100%;
        }
        hr {
          border-width: 1px 0px 0px 0px;
        }
      `}</style>
    </div>
  )
}
