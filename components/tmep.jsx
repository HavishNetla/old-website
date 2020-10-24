import Badge from './Award/Badge'
import Award from './Award/Award'
import DvBadge from './Badges/DvBadge'
import Skill from './Skill'

export default () => (
	<div className="container">
		<div>
			<h1>
				<DvBadge />
				TooLegalDidntRead
			</h1>
			<h3>May 2020</h3>

			<Award>
				<>
					<img
						src="/static/medal.svg"
						alt="Medal"
						style={{
							height: '1.3em',
							verticalAlign: '-20%',
							marginRight: '5px',
						}}
					/>
					1st Place
					<Badge color="orange">hths.hacks() 2020</Badge>
				</>
			</Award>

			<p>
				TooLegalDidntRead is a transformative and groundbreaking app to solve
				the growing problem of long and complex legally binding documents by
				using NLP and keyword extraction to create a shortened version of a
				legal document that outlines your rights, as well as your legal
				limitations. This makes sure the company can not make you agree to
				anything you didn’t want to agree to. The software also analyzes US
				Federal law, Case Law, and State law to find relevant law that applies
				to your terms of service
			</p>

			<div className="skillss">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#f89917" skill="Java" />
				<Skill small color="#356f9f" skill="Python" />
				<Skill small color="#d3647e" skill="Kotlin" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#5ed4f4" skill="React Native" />
				<Skill small color="#f04a00" skill="Rust" />
				<Skill small color="#efb838" skill="Tensorflow" />
				<Skill small color="#71b6d5" skill="Machine Learning" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f80101" skill="OpenCV" />
				<Skill small color="#ecc23d" skill="Robotics" />
				<Skill small color="#f4d97a" skill="UI/UX" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
				<Skill small color="#eb5e30" skill="iOS Development" />
				<Skill small color="#30dd81" skill="Android Development" />
			</div>
		</div>

		<style jsx>{`
			@media only screen and (max-width: 480px) {
				.skillss {
					display: block;
					flex-wrap: nowrap;
				}
			}
			@media only screen and (min-width: 480px) {
				.skillss {
					display: flex;
					flex-wrap: wrap;
				}
			}
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
				display: flex;
				transition: 500ms;
				text-align: justify;
				padding: 25px;
				border-radius: 15px;
				background-color: white;
				border-color: 0 1px 6px rgba(32, 33, 36, 0.28);
				box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
			}
		`}</style>
	</div>
)
