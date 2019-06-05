const Layout = props => (
  <div>
    <div
      style={{
        border: '1px solid #e3e5e7',
        borderRadius: '5px',
        marginTop: '10px',
      }}
    >
      <p
        style={{ marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}
      >
        {props.skill}
      </p>
    </div>
  </div>
)

export default Layout
