import Head from 'next/head'

export default ({ children }) => (
	<div style={{ height: '100%' }}>
		<Head>
			<meta charSet="utf-8" />
			<meta name="Main page" content="Havish's personal website" />
			<meta
				name="keywords"
				content="Havish, Netla, Developer, InfernoAI, News451, InsightAI, MRHS, Rocket Launch, Software, Highschool."
			/>
			<meta name="description" content="Havish Netla's developer portfolio" />
			<meta name="author" content="Havish Netla" />

			<link rel="icon" type="image/png" href="/static/rainbow_favicon.png" />
			<script
				src="https://kit.fontawesome.com/e641e1045a.js"
				crossOrigin="anonymous"
			/>

			<link
				href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
				rel="stylesheet"
			/>

			<title>Havish Netla</title>
		</Head>

		{children}

		<style jsx global>{`
			html {
				box-sizing: border-box;
			}
			* {
				box-sizing: inherit;
			}

			@media only screen and (max-width: 480px) {
				.project-skills {
					display: block;
					flex-wrap: nowrap;
				}
			}
			@media only screen and (min-width: 480px) {
				.project-skills {
					display: flex;
					flex-wrap: wrap;
				}
			}

			body {
				transition: all 500ms ease;
				font-family: -apple-system, BlinkMacSystemFont, sans-serif;
				background: black;
				color: white;
				margin: 50px 20px 50px 20px;
			}

			p {
				line-height: 1.5em;
			}

			.changeColor {
				background: white;
				color: black;
			}
			.skillz {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
			}
		`}</style>
	</div>
)
