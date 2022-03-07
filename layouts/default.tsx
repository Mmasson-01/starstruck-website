import React, { ReactChild, useRef } from "react"
import Aside from "../components/navigation/Aside"
import SideNavigation from "../components/navigation/SideNavigation"
import SideNavigationProvider from "../contexts/SideNavigationProvider"

type Props = {
	children: ReactChild
}

const Default = (props: Props) => {
	return (
		<>
			<SideNavigationProvider>
				<>
					<Aside />
					<SideNavigation className={`-translate-x-full`} />
				</>
			</SideNavigationProvider>
			<main className="font-body">{props.children}</main>
		</>
	)
}

export default Default
