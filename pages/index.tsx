import type { NextPage } from "next"
import Canvas from "../components/animations/Canvas"
import Particle from "../components/animations/Particle"

const Home: NextPage = () => {
	const draw = (
		ctx: CanvasRenderingContext2D,
		frameCount: number,
		particles: Particle[]
	) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		particles.forEach((particle) => {
			particle.draw(ctx)
			particle.update()
		})

		// ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		// ctx.fillStyle = "#000"
		// ctx.beginPath()
		// ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)
		// ctx.closePath()
		// ctx.fill()
	}

	return <Canvas draw={draw} options={{}} />
}

export default Home
