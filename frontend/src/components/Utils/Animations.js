import gsap from 'gsap'

export const fadeIn = className => {
	gsap.to(className, 0.5, {
		opacity: 1,
		y: 0,
		stagger: {amount: 0.3}
	})
}
