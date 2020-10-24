import DvBadgeLarge from './Badges/DvBadgeLarge'

export default (props) => (
	<div className="container">
		{/* <div style={{ textAlign: 'left', width: '100%', margin: '-50px' }}>
			<DvBadgeLarge />
		</div> */}
		{props.children}

		<style jsx>{`
			h1 {
				font-size: 2em;
				margin-bottom: 10px;
			}

			h3 {
				margin: 0px auto 20px auto;
				color: gray;
				font-weight: 500;
			}

			.container {
				margin: auto;
				max-width: 900px;
				transition: 500ms;
				text-align: justify;
				padding: 25px;
				margin-top: 50px;
				border-radius: 15px;
				background-color: ${props.bgColor};
				color: ${props.color};
				border-color: 0 1px 6px rgba(32, 33, 36, 0.28);
				box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
				text-align: center;
				justify-content: center;
			}
		`}</style>
	</div>
)
