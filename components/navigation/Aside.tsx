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
				className={`${props.className} fixed left-0 top-0 z-10 flex h-screen w-36`}
			>
				<button onClick={toggleNavigation}>
					<Hamburger navState={state} />
				</button>
			</aside>
		</>
	)
}

export default Aside
