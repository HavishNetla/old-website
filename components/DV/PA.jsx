import Award from '../Award'

export default function Index() {
  return (
    <div style={{ borderBottom: '1px solid #EAEAEA;' }}>
      <h2>InsightAI</h2>
      <p className="date">September 2019</p>
      <Award
        description="Top 10 out of 240 college level teams"
        award={[
          {
            text: 'PennApps 2019',
            color: 'orange',
          },
        ]}
      />
      <Award
        description="Best hack that helped the community"
        award={[
          {
            text: 'CBRE',
            color: 'orange',
          },
        ]}
      />
      <p>
        Deep learning live object and depth recognition with binaural AR audio
        spatialization and text-to-speech to help the visually impaired see the
        world with sound using only a smartphone and headphones
      </p>

      <h3>Technologies Used</h3>
      <ol>
        <li>Javascript</li>
        <li>Tensorflow.js</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Javascript Web Audio</li>
      </ol>

      <h3>Features</h3>
      <ol>
        <li>
          Custom machine learning model which detects everyday common objects
        </li>
        <li>Binaural audio which lets the user &quot;see&quot; with sound</li>
        <li>Custom filtration algorithm which filters out certain objects</li>
        <li>Simple easy to use interface for the visually impaired</li>
      </ol>
      <img src="/static/betterInsight.png" alt="" />
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
