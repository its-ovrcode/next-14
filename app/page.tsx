import React from "react"
import { lusitana } from "./ui/font"
const Home = () => {
	return (
		<div>
			<h1>Hello NEXTJS14</h1>
			<p className={`${lusitana.className}`}>
				This is NextJs.org/learn learning course
			</p>
		</div>
	)
}

export default Home
