export default props => (
  <div key="" style={{ display: 'inline' }}>
    <span style={{ backgroundColor: props.color }}>{props.children}</span>

    <style>{`
    span {
        display: inline-block;
        border-radius: 5px;
        padding: 3px 5px;
        margin: 2px 2px 2px 4px;

        font-size: 0.9em;
        white-space: nowrap;
    }
  `}</style>
  </div>
)
