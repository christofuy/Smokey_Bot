import './footer.scss'


const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<h4 className="footer-text">To continue showing your support to our parks, please feel free to visit the following resources</h4>
				<div className='footer__row flex'>
					{FOOTERLINKS.map(props => (
						<FooterCol {...props} key={props.text} />
					))}
				</div>
			</div>
		</footer>
	)
}


const FooterCol = ({link, text, imgPath}) => {
	return (
		<div className='footer__col flex flex-column ai-center'>
			<p>{text}</p>
			<a href={link} target='_blank'>
				<img className="logo" src={imgPath} />
			</a>
		</div>

	)
}


const FOOTERLINKS = [
	{
		link: 'https://www.nps.gov/subjects/partnerships/donate.htm',
		text: 'Donate',
		imgPath: '/npsLogo.png'
	},
	{
		link: 'https://www.nationalparks.org/support',
		text: 'Support',
		imgPath: 'npfLogo.png'
	},
	{
		link: 'https://www.nps.gov/getinvolved/volunteer.htm',
		text: 'Volunteer',
		imgPath: '/VIPLogo1.png'
	}
]


export default Footer
