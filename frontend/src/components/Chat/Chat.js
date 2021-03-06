import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import './chat.scss'

import gsap from 'gsap'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendIcon from '@material-ui/icons/Send';


const MESSAGES = [
	{
		msg: "Hello there! My name is Smokey the Bot and today I will be assisting you in whatever park needs you have!",
		user: 'smokey'
	},
	{
		msg: "You can ask me about the weather, location, entrance fees, hours of operation, and more!",
		user: 'smokey'
	}
]

const Chat = () => {
	const [msg, setMsg] = useState('')
	const bottomRef = useRef()

	//TODO : Convert the link to a button and make button styles

	const handleSubmit = async (e) => {
		e.preventDefault()
		MESSAGES.push({msg, user: 'user'})

		const res = await fetch('http://localhost:5000/api/chat/chat', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify({msg})
		})
		const payload = await res.json()
		const data = payload
		console.log('Data: ', data)

		const reply = {msg: '', user: 'smokey'}

		reply.msg = data.err || data.data

		bottomRef.current.scrollIntoView({behavior: 'smooth'})

		MESSAGES.push(reply)

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
						<div id='bottom' ref={bottomRef}></div>
					</div>
					<div className='window__input'>
						<form onSubmit={handleSubmit} className='flex ai-center'>
							<input
								type='text'
								autoFocus
								placeholder='Ask a question...'
								value={msg}
								className='inputField'
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
			stagger: {
				amount: 0.3
			}
		})
	}, [])

	return (
		<div id={`msg-${index}`} className={`msg msg-${user} flex ai-fend`}>
			<div
				className='msg__avatar'
				style={{
					background: `url(${user === 'user' ? '/User.jpg' : 'Smokey.jpg'}) center/cover no-repeat`
				}}
			/>
			<p className='msg__txt'>{msg}</p>
		</div>
	)
}


export default Chat
