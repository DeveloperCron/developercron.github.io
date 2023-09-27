// @ts-check
// Projects.tsx, ProjectsPage, the index

import React from "react"
import { motion } from "framer-motion"
import Wrapper from "@/layouts/wrapper"
import ProjectCard from "@/components/projectCard"
import { projectCards } from "@/constants/projectCards"

const ProjectsPage: React.FC = () => {
	return (
		<Wrapper>
			<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-y-4">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold">Projects</h1>
					<h3 className="text-md text-gray-400">some projects are personal and some work-related.</h3>
				</div>
				<div className="flex flex-col p-5 gap-y-5">
					{projectCards.map((item, index) => (
						<ProjectCard title={item.title} date={item.date} description={item.description} key={index} />
					))}
				</div>
			</motion.div>
		</Wrapper>
	)
}

export default ProjectsPage
