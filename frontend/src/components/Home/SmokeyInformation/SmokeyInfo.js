import './SmokeyInfo.scss'
import {useRef} from 'react'
import {useIntersection} from 'react-use'
import gsap from 'gsap'


//TODO: Make responsive at 960px breakpoint
const SmokeyInfo = () => {

	//TODO: Refactor this to be reusable
	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.9
	})


	const intersecting = intersection && intersection.intersectionRatio >= 0.9

	if (intersecting) fadeIn()

	return (
		<section className='smokeyinfo flex' ref={sectionRef}>
			<div className='container flex ai-center'>
				<div className='smokeyinfo__txt'>
					<h2 className='smokeyinfo__header fadeIn2'>Say Hello to Smokey</h2>
					<p className='smokeyinfo__body fadeIn2'>Welcome to the National Park Service chat bot Smokey!
					Simply ask the chat bot a question about a service offered
					by a national park and receive information quick!
					Ask anything ranging from campground information, entry fees, and
					park hours, and Smokey will answer!</p>
				</div>
				<div className='smokeyinfo__img flex jc-fend'>
					<img className='exampleimage fadeIn2' src="/ChatExample.png" />
				</div>
			</div>
		</section>
	)
}


const fadeIn = () => {
	gsap.to('.fadeIn2', 0.5, {
		opacity: 1,
		y: 0,
		stagger: {
			amount: 0.3
		}
	})
}

export default SmokeyInfo
