import React, { createContext, ReactChild, useState } from "react"

type Props = {
	children: ReactChild
}

export const SideNavigationContext = createContext({} as any)

const SideNavigationProvider = (props: Props) => {
	const [state, setState] = useState({ navOpen: false })

	const toggleNavigation = () => {
		setState({ navOpen: !state.navOpen })
	}
	return (
		<SideNavigationContext.Provider value={{ state, toggleNavigation }}>
			{props.children}
		</SideNavigationContext.Provider>
	)
}

export default SideNavigationProvider
