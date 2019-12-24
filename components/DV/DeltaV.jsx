import SA from './SA'
import BS from './BS'
import PA from './PA'
import SA2 from './SA2'

export default function Index() {
  return (
    <div className="container">
      <h1>Delta V</h1>
      <b>
        Oct 2018 - Present
      </b>
      <p />
      <p>
        I am the founder of a highly decorated team of high school students
        based in Maryland who compete in programming competitions across the
        United States to learn and spread computer science knowledge.
      </p>

      <hr />
      <SA2 />
      <PA />
      <BS />
      <SA />

      {/* <div>
        <img src="/static/GroupNews451Combined.png" alt="" />
      </div>

      <div>
        <img
          src="https://media.discordapp.net/attachments/592120406781984783/631952942752071698/PA_logo.png?width=500&height=375"
          alt=""
        />
      </div> */}
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
