import './mission.scss'


//TODO: Make responsive at 960px breakpoint
const Mission = () => {
	return (
		<section className='mission flex'>
			<div className='container flex ai-center'>
				<div className='mission__img'>
					<img src='/Mountain.jpg' alt='Mountain' />
					<div className='backdrop' />
				</div>
				<div className='mission__txt'>
					<h2>Our Mission</h2>
					<p>Our mission is to help spread awareness and encourage visitation of the various and unique National Parks around the United States. 
						The chat bot’s purpose is to help give useful information to those who are planning to visit a park.</p>
				</div>
			</div>
		</section>
	)
}


export default Mission
