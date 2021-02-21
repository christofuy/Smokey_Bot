import './SmokeyLink.scss'
import ButtonOutlined from '../../Utils/Buttons'
import {useHistory} from 'react-router-dom'
import {useIntersection} from 'react-use'
import {useRef} from 'react'
import {fadeIn} from '../../Utils/Animations'


const SmokeyLink = () => {
	const history = useHistory()

	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.6
	})


	const intersecting = intersection && intersection.intersectionRatio >= 0.6

	if (intersecting) fadeIn('.fadeIn3')

	return (
		<section id='smokeylink' className='smokeylink flex jc-center ai-center' ref={sectionRef}>
			<div className='container flex flex-column ai-center'>
				<h1 className='fadeIn3'>Talk to our Virtual Assistant, Smokey</h1>
				<ButtonOutlined
					className='fadeIn3'
					onClick={() => history.push('/chat')}
				>Chat Now</ButtonOutlined>
			</div>
		</section>
	)
}


export default SmokeyLink
