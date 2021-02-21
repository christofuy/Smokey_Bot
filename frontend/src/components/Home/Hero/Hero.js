import './hero.scss'
import ButtonOutlined from '../../Utils/Buttons'
import {Link as ScrollLink} from 'react-scroll'
//Icons
import HelpIcon from '@material-ui/icons/Help';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';


const Hero = () => {

	return (
		<section className='hero'
			//How do I access img in public in scss
			//TODO: Resize img to be more performant
			style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 30.86%, #FFF 96.68%),url("TallTrees.jpg") no-repeat scroll center top / cover'}}
		>
			<div className='container flex flex-column ai-center'>
				<h1>Visit Your Favorite National Park with Ease</h1>
				<ScrollLink to='mission' spy smooth duration={1000}>
					<ButtonOutlined>Learn More</ButtonOutlined>
				</ScrollLink>
			</div>
			<TOC />
		</section>
	)
}


const TOC = () => {
	return (
		<div className='toc'>
			<div className='toc__item'>
				<ScrollLink to='mission' spy smooth duration={1000}>
					<HelpIcon />
				</ScrollLink>
			</div>
			<div className='toc__item'>
				<ScrollLink to='smokeylink' spy smooth duration={1000}>
					<RecordVoiceOverIcon />
				</ScrollLink>
			</div>
		</div>
	)
}


export default Hero
