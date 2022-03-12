import type { NextPage } from "next"
import Default from "../layouts/default"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons"

const Home: NextPage = () => {
	return (
		<div>
			<header className="absolute top-0 left-0 flex w-full items-center justify-between py-8 pl-60 pr-24">
				<ul className="flex space-x-8 text-white">
					<li>Agence</li>
					<li>Services</li>
					<li>Réalisations</li>
				</ul>
				<button className="border border-white py-4 px-6 text-white">
					Contactez-nous
				</button>
			</header>
			<section className="flex h-screen w-screen items-center bg-black pl-60 pr-24">
				<div className="w-[500px] text-white">
					<h1 className="mb-12 text-6xl font-extrabold">
						Propulsez votre entreprise à un autre niveau
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Pariatur est mollitia, veritatis nemo sint dolor
						similique. Labore magnam autem deleniti corporis porro
						distinctio odio, facilis rem, repudiandae minima
						consectetur unde!
					</p>
				</div>
				<FontAwesomeIcon
					className="absolute bottom-12 left-60 animate-bounce text-3xl text-white"
					icon={faAngleDoubleDown}
				/>
			</section>
		</div>
	)
}

export default Home

Home.getLayout = (page) => {
	return <Default>{page}</Default>
}
