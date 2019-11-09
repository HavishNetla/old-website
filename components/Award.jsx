export default props => (
  <>
    <div className="container1" style={{ marginBottom: '0px' }}>
      <img src="/static/medal.svg" alt="Medal" /> <br />
      {props.description}
      <br />
      {props.award.map(x => (
        <div key="" style={{ display: 'inline' }}>
          <span className={x.color}>{x.text}</span>
          <br />
        </div>
      ))}
    </div>
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
      .container1 {
        margin-top: 5px;
      }
    `}</style>
  </>
)
