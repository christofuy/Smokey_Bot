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
					<p>Our mission is to help spread awareness to all National park service parks around the nation. The chat bot’s purpose is to help give crucial information to those who are planning on going to and visiting a park.</p>
				</div>
			</div>
		</section>
	)
}


export default Mission
