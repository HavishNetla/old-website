export default ({ children }) => (
  <div style={{ padding: '20px 20px', margin: 'auto' }}>
    <span className="button">{children}</span>

    <style>{`
        .button {
            border-radius: 5px;
            padding: 10px 25px;
            box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .78);
            background-color: black;
            color: white;
            transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.2s ease;
        }
        .button:hover {
            background-color: white;
            color: black;
            cursor: pointer;
        }
        .button:active {
          box-shadow: 0 0px 2px 0 rgba(32, 33, 36, .78);
        }
    `}</style>
  </div>
)
