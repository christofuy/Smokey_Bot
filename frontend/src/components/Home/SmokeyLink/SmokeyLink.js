import './SmokeyLink.scss'
import ButtonOutlined from '../../Utils/Buttons'
import {useHistory} from 'react-router-dom'
import {useIntersection} from 'react-use'
import {useRef} from 'react'
import gsap from 'gsap'


const SmokeyLink = () => {
	const history = useHistory()

	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	})


	const intersecting = intersection && intersection.intersectionRatio >= 0.6
	console.log(intersecting)

	//TODO: Remove the console.log
	if (intersecting) fadeIn()

	//TODO: Animations not working for some reason
	return (
		<section id='smokeylink' className='smokeylink flex jc-center ai-center' >
			<div className='container flex flex-column ai-center'>
				<h1 className='fadeIn3'>Talk to our Virtual Assistant, Smokey</h1>
				<ButtonOutlined
					onClick={() => history.push('/chat')}
				>Chat Now</ButtonOutlined>
			</div>
		</section>
	)
}


const fadeIn = () => {
	gsap.to('.fadeIn3', 0.6, {
		opacity: 1,
		y: 0,
		stagger: {
			amount: 0.3
		}
	})
}

export default SmokeyLink
