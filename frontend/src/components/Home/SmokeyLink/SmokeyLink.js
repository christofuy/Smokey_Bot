import './SmokeyLink.scss'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'



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

	return (
		<section className='smokeylink flex jc-center ai-center'>
			<div className='container flex flex-column ai-center'>
				<h1>Talk to our Virtual Assistant, Smokey</h1>
				<Button
					variant='outlined'
					className={classes.outlined}
				>Chat Now</Button>
			</div>
			<div className="footer"></div>
		</section>
	)
}

export default SmokeyLink
