import React, { ReactChild } from "react"

type Props = {
	children: ReactChild
}

const Default = (props: Props) => {
	return <main className="font-body">{props.children}</main>
}

export default Default
