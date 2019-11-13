export default props => (
  <div>
    <div className="nav-container">
      <a target="blank" href="mailto:netlahavish@gmail.com" aria-label="Email">
        <i className="fas fa-envelope" />
      </a>

      <a target="blank" href="https://github.com/havish10" aria-label="Github">
        <i className="fab fa-github" />
      </a>

      <a
        target="blank"
        href="https://www.linkedin.com/in/havish-netla-1bb534192/"
        aria-label="Linkedin"
      >
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
    <style jsx>{`
      i {
        font-size: 20px;
        margin: 50px 0px 0px 15px;
        width: 100%;
      }
      a {
        color: ${props.scrollPos > 600 ? 'black' : 'white'};
        text-decoration: none;
        transition: color 0.2s ease 0s;
      }

      a:hover {
        color: #dbdbdb;
      }
      .nav-container {
        position: fixed;
        top: 0px;
        z-index: 999;
        width: 80px;
      }
      @media only screen and (max-width: 800px) {
        .nav-container {
          position: relative;
          width: 100%;
        }
        i {
          width: 20px;
          margin: 25px 15px 0px 15px;
        }
      }
    `}</style>
  </div>
)
