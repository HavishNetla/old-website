export default function Index() {
  return (
    <div className="container">
      <h1>
        I am Havish Netla, currently a sophomore in highschool I specialize in
        machine learning, frontend and backend development, image processing,
        and robotics.
      </h1>
      <style jsx>
        {`
          .container {
            margin: auto;
            max-width: 900px;
            text-align: center;
            height: 100vh;
          }
          img {
            border-radius: 50%;
            width: 200px;
            box-shadow: 1px 0px 45px -15px rgba(255, 255, 255, 0.6);
          }
          h1 {
            font-size: 80px;
            text-align: left;
          }
          i {
            flex: none;
          }
          a {
            font-size: 1.2em;
            text-decoration: none;
            color: white;
            border-bottom: 1px solid transparent;
            transition: border 0.2s ease;
          }
          a:hover {
            border-bottom: 1px solid white;
          }

          @media only screen and (max-width: 600px) {
            h1 {
              font-size: 30px;
              position: absolute;
              top: 50%;
              transform: translate(0%, -50%);
            }
          }
        `}
      </style>
    </div>
  )
}
