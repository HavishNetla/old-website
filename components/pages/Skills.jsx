import Skill from '../Skill'

export default () => (
	<div className="container">
		<h1>Technical Skills</h1>
		<div className="skillss">
			<Skill color="#f0d91d" skill="Javascript" />
			<Skill color="#6ea260" skill="Node.js" />
			<Skill color="#f89917" skill="Java" />
			<Skill color="#356f9f" skill="Python" />
			<Skill color="#d3647e" skill="Kotlin" />
			<Skill color="#5ed4f4" skill="React" />
			<Skill color="#5ed4f4" skill="React Native" />
			<Skill color="#f04a00" skill="Rust" />
			<Skill color="#efb838" skill="Tensorflow" />
			<Skill color="#71b6d5" skill="Machine Learning" />
			<Skill color="#000000" skill="Express" />
			<Skill color="#f80101" skill="OpenCV" />
			<Skill color="#ecc23d" skill="Robotics" />
			<Skill color="#f4d97a" skill="UI/UX" />
			<Skill color="#c5c5c5" skill="Systems Engineering" />
			<Skill color="#eb5e30" skill="iOS Development" />
			<Skill color="#30dd81" skill="Android Development" />
		</div>

		<style jsx>
			{`
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
					font-size: 50px;
					margin-bottom: 10px;
				}
				.container {
					padding-top: 300px;
					margin: auto;
					max-width: 900px;
				}
			`}
		</style>
	</div>
)
