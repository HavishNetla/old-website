export default () => (
  <div style={{ transition: 'all 300ms ease 0s' }}>
    <div style={{ display: 'block', textAlign: 'center', paddingTop: '60px' }}>
      <img
        style={{}}
        src="/static/profile.jpg"
        alt="profile"
        className="profile"
      />
      <h1>Havish Netla</h1>
      <h6>
        <a
          className="sLink"
          href="mailto:netlahavish@gmail.com"
          aria-label="email"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i style={{ fontSize: '24px' }} className="far fa-envelope" />
        </a>
        <a
          className="sLink"
          href="https://facebook.com/havish10"
          aria-label="facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i style={{ fontSize: '24px' }} className="fab fa-facebook-f" />
        </a>
        <a
          className="sLink"
          href="https://twitter.com/netlahavish"
          aria-label="twitter"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i style={{ fontSize: '24px' }} className="fab fa-twitter" />
        </a>
        <a
          className="sLink"
          href="https://github.com/havish10"
          aria-label="github"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i style={{ fontSize: '24px' }} className="fab fa-github" />
        </a>
      </h6>
    </div>

    <div className="aboutMe" style={{ paddingTop: '15px' }}>
      <h1>About Me</h1>
      <p>
        Hello, my name is Havish Netla. I am currently a freshman in highschool.
        I specialize in frontend and backend development, image processing, and
        robotics.
      </p>
    </div>
  </div>
)
