import Award from '../Award'
import Skill from '../Skill'

export default function Index() {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA' }}>
      <h2>News 451</h2>
      <p className="date">March 2019</p>
      <Award
        description="1st Place"
        award={[
          {
            text: '6th Baltimore Hackathon',
            color: 'orange',
          },
          {
            text: 'Civic Track',
            color: 'green',
          },
        ]}
      />{' '}
      <p>
        News 451 is a minimalistic web application that allows users to see the
        recent news without clutter or ads. Users can gauge reliability and bias
        of their news using a custom trained machine learning model.
      </p>
      <div className="skillz">
        <Skill small color="#f0d91d" skill="Javascript" />
        <Skill small color="#6ea260" skill="Node.js" />
        <Skill small color="#356f9f" skill="Python" />
        <Skill small color="#5ed4f4" skill="React" />
        <Skill small color="#efb838" skill="Tensorflow" />
        <Skill small color="#71b6d5" skill="Machine Learning" />
        <Skill small color="#000000" skill="Express" />
        <Skill small color="#f4d97a" skill="UI/UX" />
      </div>
      <img src="/static/News451.png" alt="" />
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
          margin: 5px 5px;
        }
        .lime {
          background-color: lime;
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
