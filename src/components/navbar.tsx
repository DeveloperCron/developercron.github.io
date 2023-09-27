// @ts-check
// Navbar.tsx, header
import React from "react"
import { motion } from "framer-motion"

import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
	return (
		<nav className="w-full h-20 lg:w-1/2 items-center justify-center flex bg-transparent bg-opacity-0 backdrop-blur-sm fixed top-0">
			<div className="w-11/12 h-2/3 bg-black rounded-lg justify-between p-5 flex-row flex items-center">
				<motion.a
					href="/"
					className="font-bold text-lg text-white"
					whileHover={{ scale: 1.2 }}
					aria-label="Home"
				>
					L.S
				</motion.a>

				<Link
					to="/projects"
					className="text-white font-semibold hover:text-blue-500 duration-75 ease-in"
					aria-label="Projects"
				>
					Projects
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
