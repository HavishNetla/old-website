const Layout = props => (
  <div>
    <p>
      <p>{props.skill}</p>
    </p>

    <style jsx>{`
      div {
        border: 1px solid #e3e5e7;
        border-radius: 5px;
        margin: 10px 10px 0px 0px;
        transition: background-color 0.4s ease 0s;
      }
      div:hover {
        background-color: ${props.color};
        color: ${props.color === '#000000' ? '#ffffff' : '#000000'};
      }
      p {
        padding: 0px ${props.small ? '5px' : '10px'};
        margin: ${props.small ? '5px' : '10px'} 0px;
        text-align: center;
      }
    `}</style>
  </div>
)

export default Layout
