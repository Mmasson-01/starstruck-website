import type { NextPage } from "next"
import Canvas from "../components/animations/Canvas"
import Particle from "../components/animations/Particle"
import Default from "../layouts/default"

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
	}

	// return <Canvas draw={draw} options={{}} />
	return <div></div>
}

export default Home

Home.getLayout = (page) => {
	return (
		<Default>
			{page}
		</Default>
	)
}
