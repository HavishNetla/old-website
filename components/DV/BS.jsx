import Award from '../Award'

export default function Index() {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA;' }}>
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
      />
      <p>
        News 451 is a minimalistic web application that allows users to see the
        recent news without clutter or ads. Users can gauge reliability and bias
        of their news using a custom trained machine learning model.
      </p>

      <h3>Technologies Used</h3>
      <ol>
        <li>Javascript</li>
        <li>Python</li>
        <li>Tensorflow</li>
        <li>React.js</li>
        <li>Node.js</li>
      </ol>

      <h3>Features</h3>
      <ol>
        <li>
          Custom Algorithm that returns a reliability rating based on the news
          article
        </li>
        <li>Easy to use, interactive UI</li>
        <li>
          Removes all ads and clutter from your reading experience so you don't
          have to see{' '}
          <a
            target="blank"
            href="https://www.buzzfeednews.com/article/salvadorhernandez/trump-letter-turkey-president-dont-be-a-fool"
          >
            this
          </a>
        </li>
        <li>
          Innovative two-tier architecture that bridges the gap between a
          javascript frontend and a python backend
        </li>
      </ol>
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
        img {
          margin: 15px;
        }
      `}</style>
    </div>
  )
}
