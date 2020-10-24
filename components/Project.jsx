import CubixBadge from './Badges/CubixBadge'
import DvBadge from './Badges/DvBadge'

export default (props) => (
	<div className="container">
		<div>
			<h1>
				{/*  {props.robotics ? <CubixBadge /> : <DvBadge />} */}
				{props.name}
			</h1>
			<h3>{props.date}</h3>

			{props.children}
		</div>

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
				margiasdn: auto;
				max-width: 900px;
				display: flex;
				transition: 500ms;
				padding: 25px;
				margin-top: 50px;
				border-radius: 15px;
				background-color: white;
				border-color: 0 1px 6px rgba(32, 33, 36, 0.28);
				box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
			}
		`}</style>
	</div>
)
