import React from "react"
import Canvas from "../animations/Canvas"
import Particle from "../animations/Particle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

type Props = {
	className?: string
}

const SideNavigation = (props: Props) => {
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
	return (
		<div className={`${props.className} flex items-center`}>
			<aside className="z-0 flex h-screen w-36 border-r border-r-white"></aside>
			<div className="relative flex h-screen flex-col justify-center">
				<nav className="relative flex py-24 pl-24 before:absolute before:top-0 before:-left-[1px] before:z-20 before:h-full before:w-1 before:bg-blue-900 before:content-['']">
					<ul className="flex flex-col space-y-12 text-6xl font-extrabold leading-none text-white">
						<li>Qui sommes-nous?</li>
						<li>Solutions</li>
						<li>Réalisations</li>
						<li>Contactez-nous</li>
					</ul>
				</nav>
				<footer className="absolute bottom-12 left-24">
					<ul className="flex space-x-8 text-white text-3xl">
						<li>
							<FontAwesomeIcon icon={faFacebook} />
						</li>
						<li>
							<FontAwesomeIcon icon={faInstagram}/>
						</li>
					</ul>
				</footer>
			</div>
			<Canvas
				className="absolute top-0 left-0 z-[-1] h-screen w-screen bg-blue-900"
				draw={draw}
				options={{}}
			/>
		</div>
	)
}

export default SideNavigation
