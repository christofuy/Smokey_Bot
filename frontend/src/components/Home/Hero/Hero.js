import './hero.scss'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
//Icons
import HelpIcon from '@material-ui/icons/Help';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';



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


const Hero = () => {
	const classes = useStyle()

	return (
		<section className='hero'
			//How do I access img in public in scss
			//TODO: Resize img to be more performant
			style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 30.86%, #FFF 96.68%),url("TallTrees.jpg") no-repeat scroll center top / cover'}}
		>
			<div className='container flex flex-column ai-center'>
				<h1>Visit Your Favorite National Park with Ease</h1>
				<Button
					variant='outlined'
					className={classes.outlined}
				>Learn More</Button>
			</div>
			<TOC />
		</section>
	)
}


const TOC = () => {
	return (
		<div className='toc'>
			<div className='toc__item'>
				<HelpIcon fontSize='medium'/>
			</div>
			<div className='toc__item'>
				<RecordVoiceOverIcon fontSize='medium'/>
			</div>
		</div>
	)
}


export default Hero
