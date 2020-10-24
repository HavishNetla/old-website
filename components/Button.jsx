export default (props) => (
	<div style={{ whiteSpace: 'nowrap', margin: '20px' }}>
		<span className="button">{props.children}</span>

		<style jsx>{`
			.button {
				border-radius: 5px;
				padding: 10px 25px;
				box-shadow: 0 1px 6px 0 black;
				background-color: ${props.bgColor};
				color: ${props.color ? props.color : 'white'};
				transition: background-color 0.4s ease, color 0.4s ease,
					box-shadow 0.2s ease;
				overflow: hidden;
			}
			.button:hover {
				background-color: white;
				color: black;
				cursor: pointer;
			}
			.button:active {
				box-shadow: 0 0px 2px 0 rgba(32, 33, 36, 0.78);
			}
		`}</style>
	</div>
)
