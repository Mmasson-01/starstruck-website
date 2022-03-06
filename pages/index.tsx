import type { NextPage } from "next"
import Default from "../layouts/default"

const Home: NextPage = () => {
	return <div className="h-screen w-screen">

	</div>
}

export default Home

Home.getLayout = (page) => {
	return <Default>{page}</Default>
}
