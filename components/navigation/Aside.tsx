import React, { useContext, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { SideNavigationContext } from "../../contexts/SideNavigationProvider"
import Hamburger from "./Hamburger"

type Props = {
	className?: string
}

const Aside = (props: Props) => {
	const asideRef = useRef(null)
	const { state, toggleNavigation } = useContext(SideNavigationContext)
	useEffect(() => {
		if (state.navOpen) {
			gsap.to(asideRef.current, {
				duration: 0,
				css: { borderRight: "1px solid rgba(255,255,255,0)" },
			})
		} else {
			gsap.to(asideRef.current, {
				duration: 0.5,
				css: { borderRight: "1px solid rgba(255,255,255,0.4)" },
				delay: 0.5,
			})
		}
	}, [state])
	return (
		<>
			<aside
				ref={asideRef}
				className={`${props.className} fixed left-0 top-0 z-20 flex h-screen w-36 flex-col items-center justify-between`}
			>
				<span className="py-12 text-xl font-extrabold text-white">
					Starstruck
				</span>
				<button onClick={toggleNavigation}>
					<Hamburger navState={state} />
				</button>
				<span className="origin-left translate-x-1/2 -rotate-90 whitespace-nowrap px-8 text-white">
					Agence Créative
				</span>
			</aside>
		</>
	)
}

export default Aside
