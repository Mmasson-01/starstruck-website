import "../styles/globals.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { AppContext, AppInitialProps, AppLayoutProps } from "next/app"
import type { NextComponentType } from "next"
import { ReactNode } from "react"

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page)
	return getLayout(<Component {...pageProps} />)
}

export default MyApp
