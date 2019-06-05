const Layout = props => (
  <div>
    <div
      style={{
        border: '1px solid #e3e5e7',
        borderRadius: '5px',
        margin: '10px 10px 0px 0px',
      }}
    >
      <p
        style={{
          padding: '0px 10px 0px 10px',
          margin: '10px 0px 10px 0px',
          textAlign: 'center',
        }}
      >
        {props.skill}
      </p>
    </div>
  </div>
)

export default Layout
