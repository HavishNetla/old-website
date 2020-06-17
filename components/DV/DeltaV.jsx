import SA from './SA'
import BS from './BS'
import PA from './PA'
import SA2 from './SA2'
import SOS from './SOS'
import HTHS from './HTHS'

export default function Index() {
  return (
    <div className="container">
      <h1>Delta V</h1>
      <b>Oct 2018 - Present</b>
      <p />
      <p>
        I am the founder of a highly decorated team of high school students
        based in Maryland who compete in programming competitions across the
        United States to learn and spread computer science knowledge.
      </p>

      <hr />

      <HTHS />
      <SOS />
      <SA2 />
      <PA />
      <BS />
      <SA />

      <style jsx>{`
        .container {
          padding-top: 100px;
          margin: auto;
          max-width: 900px;
        }
        h1 {
          font-size: 50px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}
