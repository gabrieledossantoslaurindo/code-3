import gsap from 'https://cdn.skypack.dev/gsap@3.11.0'
let active = true


const UPDATE_ROTATION = ({ x }) => {
	gsap.set(document.documentElement, {
		'--rotation-y': gsap.utils.mapRange(0, window.innerWidth, -180, 180)(x)
	})
}

document.body.addEventListener('pointermove', UPDATE_ROTATION)

document.body.addEventListener('click', () => {
	active = !active
	document.documentElement.style.setProperty('--on', active ? 1 : 0)
})