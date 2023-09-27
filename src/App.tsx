import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"

import HomePage from "@/pages/home"
import ProjectsPage from "@/pages/projects"
import NotFoundPage from "./pages/notFound"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const App: React.FC = () => {
	return (
		<div className=" bg-zinc-950 flex flex-col items-center justify-center min-h-screen container">
			<HashRouter basename="/" future={{ v7_startTransition: true }}>
				<Navbar />
				<div className="items-center justify-center flex flex-grow w-full h-full">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="*" element={<NotFoundPage />} />

						<Route path="/projects" element={<ProjectsPage />} />
					</Routes>
				</div>
			</HashRouter>
			<Footer />
		</div>
	)
}

export default App
