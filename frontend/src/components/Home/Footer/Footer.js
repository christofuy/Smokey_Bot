import './footer.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<h1 className="footer-text">To continue showing your support to our parks, please feel free to visit the following resources</h1>
			<span className="footer-txt">
				<p className="donatetxt">Donate</p>
				<p className="supporttxt"><t>Support</t></p>
				<p className="volunteertxt"><t>Volunteer</t></p>
			</span>
			<ul className="footer-links">
				<li className="donate"><a href="https://www.nps.gov/subjects/partnerships/donate.htm" target="_blank"><img className="logo" src="/npsLogo.png"></img></a></li>
				<li className="support"><a href="https://www.nationalparks.org/" target="_blank"><img className="logo" src="/npfLogo.png"></img></a></li>
				<li className="volunteer"><a href="https://www.nps.gov/getinvolved/volunteer.htm" target="_blank"><img className="logo" src="/VIPLogo1.png"></img></a></li>
			</ul>
		</footer>
	)
}


export default Footer
