import Medal from '../Medal'

export default function Index() {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA;' }}>
      <h2>Rocket Launch App</h2>
      <p className="date">October 2018</p>
      <p>
        <Medal /> 2nd Place
        <span className="orange">Space Apps Baltimore</span>{' '}
        <span className="blue">Global Nominee</span>
      </p>
      <p>
        Rocket Launch is an intuitive web application that allows the user plan
        seeing rocket launches. The software displays future rocket launch data,
        international launch sites, and atmospheric conditions.
      </p>

      <h3>Technologies Used</h3>
      <ol>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ol>

      <h3>Features</h3>
      <ol>
        <li>
          Custom Algorithm that returns a recommended launch that takes into
          consideration distance and time
        </li>
        <li>Easy to use, interactive UI</li>
        <li>
          Real-Time weather conditions of the launch date as well as hospitality
          locations near the launch
        </li>
      </ol>
      <img src="/static/RocketLaunch.png" alt="" />
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
          margin: 0px 5px;
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
      `}</style>
    </div>
  )
}
