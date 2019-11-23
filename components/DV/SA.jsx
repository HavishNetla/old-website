import Award from '../Award'
import Skill from '../Skill'

export default function Index() {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA' }}>
      <h2>Rocket Launch App</h2>
      <p className="date">October 2018</p>
      <Award
        description="2nd Place"
        award={[
          {
            text: 'Space Apps Baltimore',
            color: 'orange',
          },
          {
            text: 'Global Nominee',
            color: 'blue',
          },
        ]}
      />

      <p>
        Rocket Launch is an intuitive web application that allows the user plan
        seeing rocket launches. The software displays future rocket launch data,
        international launch sites, and atmospheric conditions.
      </p>
      <div className="skillz">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f4d97a" skill="UI/UX" />
      </div>
      <img className="projectImage" src="/static/RocketLaunch.png" alt="" />
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
          transition: transform 0.2s; /* Animation */
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
          margin: 5px 5px;
        }
        hr {
          border-width: 1px 0px 0px 0px;
        }
        .date {
          color: grey;
          margin-top: 0px;
        }
        img:hover {
          transform: scale(1.01);
        }
        .award {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          margin: 0px;
        }
      `}</style>
    </div>
  )
}
