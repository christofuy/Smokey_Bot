import './SmokeyInfo.scss'


//TODO: Make responsive at 960px breakpoint
const SmokeyInfo = () => {
	return (
		<section className='smokeyinfo flex'>
			<div className='container flex ai-center'>
				<div className='smokeyinfo__txt'>
					<h2 classname='smokeyinfo__header'>Say Hello to Smokey</h2>
					<p className='smokeyinfo__body'>Welcome to the National Park Service chat bot Smokey!
					Simply ask the chat bot a question about a service offered
					by a national park and receive information quick!
					Ask anything ranging from campground information, entry fees, and
					park hours, and Smokey will answer!</p>
				</div>
				<div className='smokeyinfo__img flex jc-fend'>
					<img className='exampleimage' src="/ChatExample.png" />
				</div>
			</div>
		</section>
	)
}

export default SmokeyInfo
