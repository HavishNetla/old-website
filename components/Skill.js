const x = {
  javascript: 'fab fa-js',
  java: 'fab fa-java',
  python: 'fab fa-python',
  kotlin: '1',
  react: 'fab fa-react',
  express: '1',
  openCV: '1',
  robotics: 'fas fa-robot',
}

const Layout = props => (
  <div
    style={{
      border: '1px solid #e3e5e7',
      borderRadius: '5px',
      display: 'inline-block',
      backgroundImage: `url(${props.url})`,
      backgroundSize: 'cover',
    }}
    className="skill"
  />
)

export default Layout
