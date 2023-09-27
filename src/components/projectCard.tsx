import React from "react"

type ReadonlyProps<T> = {
	readonly [P in keyof T]: T[P]
}

export interface ProjectCardProperties {
	title: string
	date: string
	description: string
}
type ReadonlyComponentProps = ReadonlyProps<ProjectCardProperties>

const ProjectCard: React.FC<ReadonlyComponentProps> = ({ title, date, description }) => {
	return (
		<div className="block w-full p-6 rounded-lg shadow border bg-zinc-900 border-gray-700">
			<p className="text-white font-bold text-xs mb-1">{date}</p>
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
			<p className="font-normal text-gray-400">{description}</p>
		</div>
	)
}
export default ProjectCard
