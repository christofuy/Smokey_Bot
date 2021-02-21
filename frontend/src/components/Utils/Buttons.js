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


const ButtonOutlined = ({className, children, ...rest}) => {
	const classes = useStyle()
	return (
		<Button
			variant='outlined'
			className={`${classes.outlined} ${className}`}
			{...rest}
		>
			{children}
		</Button>
	)
}


export default ButtonOutlined
