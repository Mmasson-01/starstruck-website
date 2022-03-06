import React from "react"

type Props = {
	navState: any
}

const Hamburger = (props: Props) => {
	return (
		<div className="group absolute top-1/2 left-1/2 block h-12 w-10 -translate-y-1/2 -translate-x-1/2 transform hover:cursor-pointer">
			<span className={`absolute top-3 left-0 h-1 w-full rounded-full bg-white transition-all ease-linear group-hover:h-2  ${props.navState.navOpen ? "group-hover:-rotate-45" : "group-hover:rotate-45"}`}></span>
			<span className={`absolute top-6 left-0 h-1 w-full rounded-full bg-white transition-all ease-linear group-hover:opacity-0`}></span>
			<span className={`absolute top-9 left-0 h-1 w-full rounded-full bg-white transition-all ease-linear group-hover:h-2  ${props.navState.navOpen ? "group-hover:rotate-45" : "group-hover:-rotate-45"}`}></span>
		</div>
	)
}

export default Hamburger
