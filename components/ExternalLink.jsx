export default ({ children, href }) => (
	<a href={href} style={{ textDecoration: 'none', color: 'white' }}>
		{children}{' '}
		<img
			src="https://deltav.ml/static/link.svg"
			alt=""
			style={{
				display: 'inline',
				height: '0.6em',
				width: '0.6em',
			}}
		/>
	</a>
)
