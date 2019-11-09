import Award from '../Award'
import Skill from '../Skill'

export default function Index() {
  return (
    <div className="container" style={{ borderBottom: '1px solid #EAEAEA' }}>
      <h2>Inferno AI</h2>
      <p className="date">October 2019</p>
      <Award
        description="1st Place"
        award={[
          {
            text: 'Space Apps 2019 Washington',
            color: 'orange',
          },
        ]}
      />
      <Award
        description="People's Choice Award"
        award={[
          {
            text: 'Space Apps 2019 Washington',
            color: 'orange',
          },
        ]}
      />
      <Award
        description="Global Nominee"
        award={[
          {
            text: 'Space Apps 2019',
            color: 'orange',
          },
        ]}
      />

      <p>
        Machine Learning wildfire prediction platform that leverages NASA
        Satelite data and humidity data to predict possible future wildfires.
        The software allows users to monitor locations and alerts the user when
        there is a high risk of a wildfire.
      </p>

      <div className="skillz">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#356f9f" skill="Python" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#efb838" skill="Tensorflow" />
        <Skill small color="#71b6d5" skill="Machine Learning" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f80101" skill="OpenCV" />
        <Skill small color="#f4d97a" skill="UI/UX" />
        <Skill small color="#c5c5c5" skill="Systems Engineering" />
      </div>

      <img src="/static/InfernoAI.png" alt="" />
      <style jsx>{`
        .container {
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
        .child {
          display: inline-block;
        }
        img {
          margin: 15px;
        }
      `}</style>
    </div>
  )
}
