import './SmokeyInfo.scss'
import {useRef} from 'react'
import {useIntersection} from 'react-use'
import {fadeIn} from '../../Utils/Animations'


const SmokeyInfo = () => {

	//TODO: Refactor this to be reusable
	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.7
	})


	const intersecting = intersection && intersection.intersectionRatio >= 0.7

	if (intersecting) fadeIn('.fadeIn2')

	return (
		<section className='smokeyinfo flex' ref={sectionRef}>
			<div className='smokeyinfo__content container flex ai-center jc-center'>
				<div className='smokeyinfo__img flex jc-fend'>
					<img className='exampleimage fadeIn2' src="/ChatExample.png" />
				</div>
				<div className='smokeyinfo__txt'>
					<h2 className='smokeyinfo__header fadeIn2'>Say Hello to Smokey</h2>
					<p className='smokeyinfo__body fadeIn2'>Welcome to the National Park Service chat bot Smokey!
					Leave your worries about your trip to your favorite national park and simply ask the chat bot a question about a service offered
					by a national park!
					Ask anything ranging from campground information, entry fees, and
					park hours, and Smokey will answer!</p>
				</div>
			</div>
		</section>
	)
}


export default SmokeyInfo
