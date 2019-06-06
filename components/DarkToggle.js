/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export default ({ onClick, activeTheme }) => (
  <div
    onClick={onClick}
    className={`toggle ${activeTheme}`}
    style={{
      cursor: 'pointer',

      display: 'flex',
      left: '81%',
      position: 'fixed',
    }}
  >
    <p>{activeTheme.toUpperCase()}</p>

    <i
      style={{ marginLeft: '10px', marginTop: '16px' }}
      className="fas fa-adjust"
    />
  </div>
)
