import { useEffect, useRef } from "react"
import Particle from "../components/animations/Particle"

const useCanvas = (draw: Function, options: any = {}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const particles: Particle[] = []

	// const handleMouseMove = (e: MouseEvent) => {
	// 	particles.forEach((particle) => {
	// 		// particle.update(e.clientX, e.clientY)
	// 	})
	// }

	// useEffect(() => {
	// 	window.addEventListener("mousemove", handleMouseMove)
	// 	return () => {
	// 		window.removeEventListener("mousemove", handleMouseMove)
	// 	}
	// }, [])

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas?.getContext(options.context || "2d")

		let frameCount = 0
		let animationFrameId: number

		const render = () => {
			options.preDraw(context, canvas)
			frameCount++
			draw(context, frameCount, particles)
			animationFrameId = window.requestAnimationFrame(render)
			options.postDraw(context)
		}

		render()

		if (particles.length === 0 && canvas) {
			for (let i = 0; i < 300; i++) {
				let circle = new Particle(
					Math.random() * canvas.width,
					Math.random() * canvas.height,
					5,
					"rgba(255,255,255,0.4)",
					0.2
				)
				particles.push(circle)
			}
		}

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [draw])

	return canvasRef
}

export default useCanvas
