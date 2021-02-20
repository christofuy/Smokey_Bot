import './SmokeyInfo.scss'


const SmokeyInfo = () => {
	return (
		<section className='smokeyinfo'>
			<div className='container'>
				<h1 classname = 'header'>Say Hello to Smokey</h1>
                <p className = 'textinfo'>Welcome to the National Park Service chat bot Smokey! 
                    Simply ask the chat bot a question about a service offered 
                    by a national park and receive information quick! 
                    Ask anything ranging from campground information, entry fees, and 
                    park hours, and Smokey will answer!</p>
			</div>
            <div>
                <img className = 'exampleimage' src="/ChatExample.png" />
            </div>
		</section>
	)
}

export default SmokeyInfo