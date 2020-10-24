import React from 'react'
import Layout from '../components/Layout'
import Intro from '../components/pages/Intro'
import Nav from '../components/Nav'
import Skills from '../components/pages/Skills'
import Projects from '../components/pages/Projects'
import Organization from '../components/Organization'
import Organizations from '../components/pages/Organizations'

export default class Index extends React.Component {
	state = {
		scrollPos: null,
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollListener)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollListener)
	}

	scrollListener = () => {
		this.setState({
			scrollPos: window.pageYOffset,
		})

		if (this.state.scrollPos > 600) {
			document.body.style = 'background: white; color: black;'
		} else {
			document.body.style = 'background: black; color: white;'
		}
	}

	render() {
		return (
			<Layout>
				<meta
					name="theme-color"
					content={this.state.scrollPos > 600 ? '#ffffff' : '#000000'}
				/>
				<Nav scrollPos={this.state.scrollPos} />

				<div style={{ margin: '100px auto auto auto', maxWidth: 900 }}>
					<div>
						<Intro />
						<Skills />
						<Organizations />
						<Projects />

						{/* <Organization bgColor="#292a36" color="white">
							<div style={{ marginTop: '25px', marginBottom: '25px' }}>
								<h1 style={{ fontSize: '7em', margin: '0px' }}>Delta V</h1>
								<h1 style={{ fontSize: '1em' }}>
									AI/ML Programmer at the East Coast's best highschool hackathon
									team
								</h1>
							</div>
						</Organization>

						<Organization bgColor="#ffe3b0" color="black">
							<div style={{ marginTop: '0px', marginBottom: '0px' }}>
								<h1 style={{ fontSize: '7em', margin: '0px' }}>MDHacks</h1>
								<h1 style={{ fontSize: '1em' }}>
									Founder & Director at Marylands largest high school run
									hackathon
								</h1>
							</div>
						</Organization>

						<Organization bgColor="black" color="#05ff00">
							<div style={{ marginTop: '25px', marginBottom: '25px' }}>
								<h1 style={{ fontSize: '7em', margin: '0px' }}>MRHS CS Club</h1>
								<h1 style={{ fontSize: '1em' }}>
									Founder & President of the first ever CS Club at MRHS
								</h1>
							</div>
						</Organization> */}
					</div>
				</div>
				<style jsx>{`
					i {
						font-size: 25px;
						margin: 50px 0px 10px 25px;
						width: 100%;
					}
					a {
						color: inherit;
						text-decoration: none;
					}
				`}</style>
			</Layout>
		)
	}
}
