import './mission.scss'
import {useRef} from 'react'
import {useIntersection} from 'react-use'
import {fadeIn} from '../../Utils/Animations'


const Mission = () => {
	//TODO: Refactor this to be reusable
	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.7
	})

	const intersecting = intersection && intersection.intersectionRatio >= 0.7
	if (intersecting) fadeIn('.fadeIn')


	return (
		<section id='mission' className='mission flex' ref={sectionRef}>
			<div className='mission__content container flex ai-center jc-center'>
				<div className='mission__img'>
					<div className='backdrop fadeIn' />
					<img src='/Mountain.jpg' alt='Mountain' className='fadeIn' />
				</div>
				<div className='mission__txt'>
					<h2 className='fadeIn'>Our Mission</h2>
					<p className='fadeIn'>
						Our mission is to help spread awareness and encourage visitation of the various and unique National Parks around the United States.
						The chat bot’s purpose is to help give useful information to those who are planning to visit a park.
					</p>
				</div>
			</div>
		</section>
	)
}




export default Mission
