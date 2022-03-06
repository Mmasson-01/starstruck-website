import React from "react"
import Hamburger from "./Hamburger"

type Props = {
	className?: string
}

const Aside = (props: Props) => {
	return (
		<aside
			className={`${props.className} fixed left-0 top-0 z-10 flex h-screen w-36 border-r border-r-white`}
		>
			<Hamburger />
		</aside>
	)
}

export default Aside
