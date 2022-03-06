import React, { useContext, useEffect, useRef } from "react"
import Canvas from "../animations/Canvas"
import Particle from "../animations/Particle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Transition } from "react-transition-group"
import gsap from "gsap"
import { SideNavigationContext } from "../../contexts/SideNavigationProvider"

type Props = {
	className?: string
}

const SideNavigation = (props: Props) => {
	const { state } = useContext(SideNavigationContext)
	const asideRef = useRef(null)

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

	useEffect(() => {
		if (!state.navOpen) return
		const links = document.querySelectorAll(".item")
		const socials = document.querySelectorAll(".socials")

		gsap.from(links, {
			delay: 0.4,
			duration: 0.5,
			skewY: 2,
			y: "105%",
			ease: "Power4.inOut",
			stagger: { amount: 0.5 },
		})
		gsap.from(socials, {
			delay: 0.4 + (0.5 * links.length - 1),
			duration: 0.5,
			skewY: 2,
			y: "105%",
			ease: "Power4.inOut",
		})
	})

	return (
		<Transition
			timeout={1000}
			mountOnEnter
			unmountOnExit
			in={state.navOpen}
			onExit={(node) => {
				gsap.to(node, {
					duration: 0.5,
					x: "-100%",
					ease: "Power4.inOut",
				})
			}}
			onEnter={(node, isAppearing) => {
				gsap.to(node, {
					duration: 0.5,
					x: 0,
					ease: "Power4.inOut",
				})
			}}
		>
			<div
				className={`${props.className} absolute left-0 top-0 flex h-screen w-screen`}
			>
				<aside
					ref={asideRef}
					className="flex h-full w-36 border-r border-r-white"
				></aside>
				<div className="relative flex h-screen w-full flex-col justify-center">
					<nav className="relative flex py-24 pl-24 before:absolute before:top-0 before:-left-[2px] before:z-10 before:h-full before:w-1 before:bg-blue-900 before:content-['']">
						<ul className="flex flex-col space-y-12 text-6xl font-extrabold leading-none text-white">
							<li className="relative flex h-16 w-full overflow-hidden">
								<span className="item w-fit whitespace-nowrap">
									Qui sommes-nous?
								</span>
							</li>
							<li className="relative flex h-16 w-full overflow-hidden">
								<span className="item w-fit whitespace-nowrap">
									Solutions
								</span>
							</li>
							<li className="relative flex h-16 w-full overflow-hidden">
								<span className="item w-fit whitespace-nowrap">
									Réalisations
								</span>
							</li>
							<li className="relative flex h-16 w-full overflow-hidden">
								<span className="item w-fit whitespace-nowrap">
									Contactez-nous
								</span>
							</li>
						</ul>
					</nav>
					<footer className="absolute bottom-12 left-24">
						<ul className="flex space-x-8 text-3xl text-white">
							<li className="relative flex h-8 w-full overflow-hidden">
								<FontAwesomeIcon
									className="socials"
									icon={faFacebook}
								/>
							</li>
							<li className="relative flex h-8 w-full overflow-hidden">
								<FontAwesomeIcon
									className="socials"
									icon={faInstagram}
								/>
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
		</Transition>
	)
}

export default SideNavigation
