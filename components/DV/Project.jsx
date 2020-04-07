export default props => (
  <div style={{ borderBottom: '1px solid #EAEAEA' }}>
    <h2>{props.name}</h2>
    <p className="date">{props.date}</p>

    {props.children}
    <style jsx global>{`
      h2 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      .projectImage {
        margin: 15px;
        width: 100%;
        transition: transform 0.2s; /* Animation */
      }
      .date {
        color: grey;
        margin-top: 0px;
      }
      img:hover {
        transform: scale(1.01);
      }
      .skills {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
)
