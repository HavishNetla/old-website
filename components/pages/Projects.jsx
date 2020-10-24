import Button from '../Button'
import Project from '../Project'
import Award from '../Award/Award'
import Badge from '../Award/Badge'
import Medal from '../Award/Medal'
import Skill from '../Skill'

export default () => (
	<div>
		<h1 style={{ fontSize: '50px', marginTop: '150px' }}>Projects</h1>

		<Project name="TooLegalDidntRead" date="May 2020">
			<Award>
				<>
					<Medal />
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

			<div className="project-skills">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#356f9f" skill="Python" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#f04a00" skill="Rust" />
				<Skill small color="#efb838" skill="Tensorflow" />
				<Skill small color="#71b6d5" skill="Machine Learning" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f4d97a" skill="UI/UX" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
			</div>
		</Project>

		<Project name="Supply Smart" date="April 2020">
			<Award>
				<>
					<Medal />
					1st Place of 140 University Teams
					<Badge color="orange">HooHacks 2020</Badge>
					<Badge color="aqua">Finance Track</Badge>
				</>
			</Award>

			<p>
				Deep learning natural language processing based supply and demand
				analysis and prediction of essential items displayed on a personalized
				and intuitive web application
			</p>

			<div className="project-skills">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#356f9f" skill="Python" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#f04a00" skill="Rust" />
				<Skill small color="#efb838" skill="Tensorflow" />
				<Skill small color="#71b6d5" skill="Machine Learning" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f4d97a" skill="UI/UX" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
			</div>
		</Project>

		<Project name="InfernoAI" date="October 2019">
			<Award>
				<>
					<Medal />
					1st Place
					<Badge color="orange">Space Apps 2019 Washington DC</Badge>
				</>
			</Award>
			<Award>
				<>
					<Medal />
					Peoples Choice Award
					<Badge color="orange">Space Apps 2019 Washington DC</Badge>
				</>
			</Award>
			<Award>
				<>
					<Medal />
					Global Nominee
					<Badge color="orange">Space Apps 2019</Badge>
				</>
			</Award>

			<p>
				Machine Learning wildfire prediction platform that leverages NASA
				Satellite data and humidity data to predict possible future wildfires.
				The software allows users to monitor locations and alerts the user when
				there is a high risk of a wildfire.
			</p>

			<div className="project-skills">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#356f9f" skill="Python" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#f04a00" skill="Rust" />
				<Skill small color="#efb838" skill="Tensorflow" />
				<Skill small color="#71b6d5" skill="Machine Learning" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f4d97a" skill="UI/UX" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
			</div>
		</Project>

		<Project name="InsightAI" date="September 2019">
			<Award>
				<>
					<Medal />
					Top 10 out of 240 college level teams
					<Badge color="orange">PennApps 2019</Badge>
				</>
			</Award>
			<Award>
				<>
					<Medal />
					Best hack that helped the community
					<Badge color="orange">CBRE Group</Badge>
				</>
			</Award>

			<p>
				Deep learning live object and depth recognition with binaural AR audio
				spatialization and text-to-speech to help the visually impaired see the
				world with sound using only a smartphone and headphones
			</p>

			<div className="project-skills">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#efb838" skill="Tensorflow" />
				<Skill small color="#71b6d5" skill="Machine Learning" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f4d97a" skill="UI/UX" />
			</div>
		</Project>

		<Project name="News451" date="March 2019">
			<Award>
				<>
					<Medal />
					1st Place
					<Badge color="orange">6th Baltimore Hackathon</Badge>
					<Badge color="lime">Civic Track</Badge>
				</>
			</Award>

			<p>
				News 451 is a minimalistic web application that allows users to see the
				recent news without clutter or ads. Users can gauge reliability and bias
				of their news using a custom trained machine learning model.
			</p>

			<div className="project-skills">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#356f9f" skill="Python" />
				<Skill small color="#efb838" skill="Tensorflow" />
				<Skill small color="#71b6d5" skill="Machine Learning" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f4d97a" skill="UI/UX" />
			</div>
		</Project>

		<Project robotics name="Rocket Launch" date="October 2018">
			<Award>
				<>
					<Medal />
					2nd Place
					<Badge color="orange">Space Apps Baltimore</Badge>
					<Badge color="lime">Global Nominee</Badge>
				</>
			</Award>

			<p>
				Rocket Launch is an intuitive web application that allows the user plan
				seeing rocket launches. The software displays future rocket launch data,
				international launch sites, and atmospheric conditions.
			</p>

			<div className="project-skills">
				<Skill small color="#f0d91d" skill="Javascript" />
				<Skill small color="#6ea260" skill="Node.js" />
				<Skill small color="#5ed4f4" skill="React" />
				<Skill small color="#000000" skill="Express" />
				<Skill small color="#f4d97a" skill="UI/UX" />
			</div>
		</Project>

		<h1 style={{ fontSize: '50px', marginTop: '150px', marginBottom: '10px' }}>
			FIRST Tech Challenge
		</h1>

		<div style={{ fontWeight: 'bold', margin: '0px' }}>
			<p style={{ margin: '0px' }}>September 2016 - Present</p>
			<p style={{ margin: '0px' }}>
				World Standing: <span style={{ color: 'red' }}>6th</span> out of 6800+
			</p>
		</div>

		<p>
			The FIRST Tech Challenge is a highschool robotics competition where every
			season teams are tasked with building and programming a robot that
			competes in that years game, teams go through multiple levels of
			competition and particpate in judging. On my team, I was the Software
			Lead, driver of the robot, and a key part of Judging. After I graduated, I
			continue to give back to the community by volunteering at competitions.
		</p>

		<Project robotics name="Skystone" date="2019-2020">
			<Award>
				<Medal />
				1st Place
				<Badge color="orange">Maryland State Championship</Badge>
				<Badge color="aqua">Record of 5-0-0</Badge>
			</Award>
			<Award>
				<Medal />
				1st Place
				<Badge color="orange">Virginia State Championship</Badge>
				<Badge color="aqua">Record of 5-0-0</Badge>
			</Award>
			<Award>
				<Medal />
				1st Place
				<Badge color="orange">Think Award</Badge>
				<Badge color="lime">Documentation Award</Badge>
				<Badge color="aqua">Virginia State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">Inspire Award</Badge>
				<Badge color="lime">Overall Performance Award</Badge>
				<Badge color="red">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				1st Place
				<Badge color="orange">Think Award</Badge>
				<Badge color="lime">Documentation Award</Badge>
				<Badge color="red">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				Finalist
				<Badge color="orange">Design Award</Badge>
				<Badge color="lime">Robot Design Award</Badge>
				<Badge color="red">Maryland State Championship</Badge>
			</Award>

			<p>
				In SkyStone, the goal of the game is to deliver rectangular prism stones
				from a depot area into a foundation area. At the foundation the Robot
				must stack the stones as high as it can and at the end of the match the
				Robot must move the foundation out of the building area and place a
				special stone on the very top, to accomplish this we used dual cage ball
				bearing linear slides for our stacking system, and a dual side quad
				compliant wheel intake to intake the stones.
			</p>

			<p>
				This was my first year using Kotlin and Java simultaneously to program
				the robot. Additionally this year I utilized advanced odometry and path
				following techniques that allowed us to create one of the best
				autonomous programs in the state of Maryland and Virgina.
			</p>

			<div
				style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
			>
				<Button bgColor="black">
					<a
						href="https://havish.dev/static/papers/Three%20Wheel%20Localization.pdf"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						Odometry White Paper
					</a>
				</Button>
				<Button bgColor="black">
					<a
						href="https://havish.dev/static/papers/Pure%20Pursuit.pdf"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						Pure Pursuit White Paper
					</a>
				</Button>
			</div>

			<p>
				My team had great success this year coming 1st in the Maryland
				Championship and 1st at the Virigina State Championship and advanced to
				the World Championship in Detroit. Unfortunately the World Championship
				was canceled due to COVID-19
			</p>
			<div className="project-skills">
				<Skill small color="#f89917" skill="Java" />
				<Skill small color="#d3647e" skill="Kotlin" />
				<Skill small color="#f80101" skill="OpenCV" />
				<Skill small color="#ecc23d" skill="Robotics" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
				<Skill small color="#30dd81" skill="Android Development" />
			</div>
		</Project>

		<Project robotics name="Rover Ruckus" date="2018-2019">
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">World Championship</Badge>
			</Award>
			<Award>
				<Medal />
				Finalist
				<Badge color="orange">Think Award</Badge>
				<Badge color="lime">Documentation Award</Badge>
				<Badge color="aqua">World Championship</Badge>
			</Award>

			<Award>
				<Medal />
				1st Place
				<Badge color="orange"> Maryland State Championship</Badge>
				<Badge color="aqua">Record of 4-1-0</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">Inspire Award</Badge>
				<Badge color="lime">Overall Performance Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				1st Place
				<Badge color="orange">Think Award</Badge>
				<Badge color="lime">Documentation Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				Finalist
				<Badge color="orange">Innovate Award</Badge>
				<Badge color="lime">Innovation Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				Finalist
				<Badge color="orange">Design Award</Badge>
				<Badge color="lime">Robot Design Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				Finalist
				<Badge color="orange">Control Award</Badge>
				<Badge color="lime">Software Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>

			<p>
				In Relic Recovery, the goal was to score 4in by 4in cubes into a
				structure in certain patterns, at the very end of the match the robot
				must pick up a relic and extend it 5 feet outside of the field. To do
				this we created a dual chain lift that was able to score two cubes at
				the time, the limit according to the rules, and a linear slide extension
				for the relic. Using Java and advanced object oriented design we were
				able to control the dozens of DC Motors and sensors. By the end of the
				season we had the best autonomous in the World.
			</p>

			<p>
				My team had great success this year coming 1st in the Maryland
				Championship and advanced to the World Championship in Detroit. At the
				World Championship we went 8-1 in qualification matches and won our
				divison, and placed 2nd in the world.
			</p>
			<div className="project-skills">
				<Skill small color="#f89917" skill="Java" />
				<Skill small color="#f80101" skill="OpenCV" />
				<Skill small color="#ecc23d" skill="Robotics" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
				<Skill small color="#30dd81" skill="Android Development" />
			</div>
		</Project>

		<Project robotics name="Relic Recovery" date="2017-2018">
			<Award>
				<Medal /> 2nd Place
				<Badge color="orange">World Championship</Badge>
				<Badge color="aqua">Record of 8-1-0</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">Think Award</Badge>
				<Badge color="lime">Documentation Award</Badge>
				<Badge color="aqua">World Championship</Badge>
			</Award>

			<Award>
				<Medal />
				Semifinalist
				<Badge color="orange">East Super Regionals</Badge>
			</Award>

			<Award>
				<Medal />
				3rd Place
				<Badge color="orange">Design Award</Badge>
				<Badge color="lime">Award for Robot Design</Badge>
				<Badge color="aqua">East Super Regionals</Badge>
			</Award>

			<Award>
				<Medal />
				1st Place
				<Badge color="orange"> Maryland State Championship</Badge>
				<Badge color="aqua">Record of 4-1-0</Badge>
			</Award>
			<Award>
				<Medal />
				1st Place
				<Badge color="orange">Inspire Award</Badge>
				<Badge color="lime">Overall Performance Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">Think Award</Badge>
				<Badge color="lime">Documentation Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">Connect Award</Badge>
				<Badge color="lime">Third Highest Award</Badge>
				<Badge color="aqua">Maryland State Championship</Badge>
			</Award>

			<p>
				In Relic Recovery, the goal was to score 4in by 4in cubes into a
				structure in certain patterns, at the very end of the match the robot
				must pick up a relic and extend it 5 feet outside of the field. To do
				this we created a dual chain lift that was able to score two cubes at a
				time, the limit according to the rules, and a linear slide extension for
				the relic. Using Java and advanced object oriented design we were able
				to control the dozens of DC Motors and sensors. By the end of the season
				we had the best autonomous in the World.
			</p>

			<p>
				My team had great success this year coming 1st in the Maryland
				Championship and advanced to the World Championship in Detroit. At the
				World Championship we went 8-1 in qualification matches and won our
				divison, and placed 2nd in the world.
			</p>
			<div className="project-skills">
				<Skill small color="#f89917" skill="Java" />
				<Skill small color="#f80101" skill="OpenCV" />
				<Skill small color="#ecc23d" skill="Robotics" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
				<Skill small color="#30dd81" skill="Android Development" />
			</div>
		</Project>

		<Project robotics name="Velocity Vortex" date="2017-2018">
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange">World Championship</Badge>
				<Badge color="aqua">Record of 8-1-0</Badge>
			</Award>
			<Award>
				<Medal />
				Semi Finalist
				<Badge color="orange">East Super Regional Tesla Division</Badge>
				<Badge color="aqua">Record of 8-1-0</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange"> Delaware State Championship</Badge>
			</Award>
			<Award>
				<Medal />
				2nd Place
				<Badge color="orange"> Maryland State Championship</Badge>
				<Badge color="aqua">Record of 4-1-0</Badge>
			</Award>

			<p>
				I was in 7th grade when I started participating in the FIRST Tech
				Challenge RObotics Competition, and my first game was Velocity Vortex.
				The goal of Velocity Vortex was to shoot 3 inch wiffle balls 4 feet into
				the air, and into a "vortex" structure. To do this we created a dual
				flywheel system that utilized a perfectly shaped arc to launch the ball
				4 feet in the air. Using Java and an on board Android phone we control
				the dozens of DC Motors and sensors on the robot to do autonomous tasks
				and compete in the tele-op controlled period.
			</p>

			<p>
				My team had great success this year coming 2nd in both the Delaware
				State Championship, and Maryland Championship. After we went to the East
				Super Regionals were we were a semi-finalist and advanced to the World
				Championship in St. Louis. At the World Championship we went 8-1 in
				qualification matches and won our divison, and placed 2nd in the world.
			</p>
			<div className="project-skills">
				<Skill small color="#f89917" skill="Java" />
				<Skill small color="#f80101" skill="OpenCV" />
				<Skill small color="#ecc23d" skill="Robotics" />
				<Skill small color="#c5c5c5" skill="Systems Engineering" />
				<Skill small color="#30dd81" skill="Android Development" />
			</div>
		</Project>
	</div>
)
