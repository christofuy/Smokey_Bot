import './hero.scss'


const Hero = () => {
	return (
		<section className='hero'
			//How do I access img in public in scss
			style={{background: 'url(TallTrees.jpg) top/cover no-repeat'}}
		>
			<div className='container'>
				<h1>Visit Your Favorite National Park with Ease</h1>
			</div>
		</section>
	)
}


export default Hero
