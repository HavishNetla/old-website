export default props => (
  <>
    <p className="container1" style={{ marginBottom: '0px' }}>
      <img
        src="https://d33wubrfki0l68.cloudfront.net/9937a7794b3ef8b1ec98981433aa445222babe04/651ed/static/medal.svg"
        alt="Medal"
      />{' '}
      <br />
      {props.description}
      <br />
      {props.award.map(x => (
        <div key="" style={{ display: 'inline' }}>
          <span className={x.color}>{x.text}</span>
          <br />
        </div>
      ))}
    </p>
    <style jsx>{`
      @media only screen and (max-width: 480px) {
        .container1 {
          text-align: center;
        }
        br {
          display: block;
        }
      }
      @media only screen and (min-width: 480px) {
        br {
          display: none;
        }
      }

      img {
        height: 1.2em;
        vertical-align: top;
      }
      span {
        display: inline-block;
        border-radius: 5px;
        padding: 0px 5px 2px 5px;
        margin: 2px 2px 2px 4px;

        font-size: 0.9em;
        white-space: nowrap;
      }
      .orange {
        background-color: orange;
      }
      .blue {
        background-color: aqua;
      }
      .green {
        background-color: lime;
      }
    `}</style>
  </>
)
