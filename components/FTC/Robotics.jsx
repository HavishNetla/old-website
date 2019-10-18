import SA from '../DV/SA'
import BS from '../DV/BS'
import PA from '../DV/PA'

export default function Index() {
  return (
    <div className="container">
      <h1>
        Cubix<sup>3</sup> Robotics
      </h1>
      <b>
        September 2016 - Present
        <br />
        World Standing: 7th out of 6000+
      </b>
      <p />
      <p>
        A team of highschoolers who participate in the FIRST Tech Challenge
        Robotics Competition. In this team I am the lead programmer
      </p>

      <hr />
      <PA />
      <BS />
      <SA />
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
        .orange {
          background-color: orange;
          border-radius: 5px;
          padding: 0px 5px 2px 5px;
          margin: 0px 5px;
        }
        .blue {
          background-color: aqua;
          border-radius: 5px;
          padding: 0px 5px 2px 5px;
          margin: 0px 5px;
        }
        hr {
          border-width: 1px 0px 0px 0px;
        }
      `}</style>
    </div>
  )
}
