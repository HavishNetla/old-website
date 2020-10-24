export default (props) => (
	<div key="" style={{ display: 'inline' }}>
		<span className="badge" style={{ backgroundColor: props.color }}>
			{props.children}
		</span>

		<style>{`
            .badge {
                display: inline-block;
                border-radius: 5px;
                padding: 3px 5px;
                margin: 2px 2px 2px 4px;
        
                font-size: 0.9em;
                font-weight: bold;
                white-space: nowrap;
            }
        `}</style>
	</div>
)
