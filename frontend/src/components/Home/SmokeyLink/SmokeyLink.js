import './SmokeyLink.scss'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {useHistory} from 'react-router-dom'
import {useIntersection} from 'react-use'
import {useRef} from 'react'
import gsap from 'gsap'



const useStyle = makeStyles({
	outlined: {
		borderRadius: 50,
		border: '1px solid #282828',
		padding: 0,
		'& span': {
			fontSize: 'clamp(0.9rem,2vw,1.125rem)',
			textTransform: 'none',
			fontWeight: '600',
			padding: '0.5em 1.75em'
		}
	}
})


const SmokeyLink = () => {
	const classes = useStyle()
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
		<section className='smokeylink flex jc-center ai-center' >
			<div className='container flex flex-column ai-center'>
				<h1 className='fadeIn3'>Talk to our Virtual Assistant, Smokey</h1>
				<Button
					variant='outlined'
					className={`${classes.outlined} fadeIn3`}
					onClick={() => history.push('/chat')}
				>Chat Now</Button>
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
