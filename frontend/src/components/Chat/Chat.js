import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './chat.scss'

import {Link as ScrollLink} from 'react-scroll'
import gsap from 'gsap'

//TODO: Try using input base
import InputBase from '@material-ui/core/InputBase'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendIcon from '@material-ui/icons/Send';


const MESSAGES = [
	{
		msg: "Hello there! My name is Smokey the Bot and today I will be assisting you in whatever park needs you have!",
		user: 'smokey'
	},
	{
		msg: "Start by inputting \"campgrounds\" or \"parks\"",
		user: 'smokey'
	}
]

const Chat = () => {
	const [msg, setMsg] = useState('')

	//TODO : Convert the link to a button and make button styles

	const handleSubmit = (e) => {
		e.preventDefault()
		MESSAGES.push({msg, user: 'user'})
		//Scroll Function
		setMsg('')
	}

	return (
		<div className='chat'
			style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url(/Valley.jpg) center/cover no-repeat'}}
		>
			<header className='chat__header flex'>
				<div className='chat__link'>
					<Link to='/' className='flex ai-center'> <ExitToAppIcon /> Back to Home </Link>
				</div>
			</header>
			<div className='container container-md'>
				<div className='window'>
					<div className='window__header'>
						<h2>Virtual Assistant</h2>
					</div>
					<div className='window__body'>
						{MESSAGES.map((props, index) => (
							<Message {...props} index={index} key={index} />
						))}
						<div id='bottom' />
					</div>
					<div className='window__input'>
						<form onSubmit={handleSubmit} className='flex ai-center'>
							<input
								type='text'
								placeholder='Ask a question...'
								value={msg}
								onChange={e => setMsg(e.target.value)}
							/>
							<button type='submit' className='sendIcon flex ai-center'>
								<SendIcon />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}


const Message = ({msg, user, index}) => {
	useEffect(() => {
		gsap.to('.msg', 0.2, {
			opacity: 1,
			y: 0,
		})
	}, [])

	return (
		<div id={`msg-${index}`} className={`msg msg-${user} flex`}>
			<p className='msg__txt'>{msg}</p>
		</div>
	)
}


export default Chat