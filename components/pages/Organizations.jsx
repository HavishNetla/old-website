import Button from '../Button'
import Organization from '../Organization'

export default () => (
	<div>
		<h1 style={{ fontSize: 50, marginBottom: 10, marginTop: '150px' }}>
			Organizations
		</h1>
		<Organization bgColor="#292a36" color="white">
			<div style={{ marginTop: '25px', marginBottom: '25px' }}>
				<h1>Delta V</h1>
				<h2>
					AI/ML Programmer at the East Coast's best highschool hackathon team
				</h2>
				<Button bgColor="#292a36">
					<a
						href="https://deltav.ml"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						Learn More
					</a>
				</Button>
			</div>
		</Organization>

		<Organization bgColor="#ffe3b0" color="black">
			<div style={{ marginTop: '0px', marginBottom: '0px' }}>
				<h1>MDHacks</h1>
				<h2>
					Founder & Director at Marylands largest high school run hackathon
				</h2>
				<Button bgColor="#ffe3b0" color="black">
					<a
						href="https://mdhacks.com"
						style={{ color: 'inherit', textDecoration: 'none' }}
					>
						Learn More
					</a>
				</Button>
			</div>
		</Organization>

		<Organization bgColor="black" color="#05ff00">
			<div style={{ marginTop: '25px', marginBottom: '25px' }}>
				<h1>MRHS CS Club</h1>
				<h2>Founder & President of the first ever CS Club at MRHS</h2>
			</div>
			<Button bgColor="black">
				<a
					href="https://mrhscs.club"
					style={{ color: 'inherit', textDecoration: 'none' }}
				>
					Learn More
				</a>
			</Button>
		</Organization>

		<style jsx>{`
			h1 {
				font-size: 7em;
				margin: 0px;
			}

			h2 {
				font-size: 1em;
			}

			@media only screen and (max-width: 600px) {
				h1 {
					font-size: 50px;
					margin: 0px;
				}

				h2 {
					font-size: 10px;
				}
			}
		`}</style>
	</div>
)
