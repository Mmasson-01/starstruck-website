import React, { ReactChild } from "react"
import Aside from "../components/navigation/Aside"
import SideNavigation from "../components/navigation/SideNavigation"

type Props = {
	children: ReactChild
}

const Default = (props: Props) => {
	return (
		<>
			<Aside className="border-r-0" />
			<SideNavigation className="transform transition-transform duration-500 ease-in-out" />
			<main className="font-body">{props.children}</main>
		</>
	)
}

export default Default
