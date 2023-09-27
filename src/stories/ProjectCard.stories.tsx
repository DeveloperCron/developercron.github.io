import type { Meta, StoryObj } from "@storybook/react"

import ProjectCard from "@/components/projectCard"

const meta: Meta<typeof ProjectCard> = {
	component: ProjectCard,
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Primary: Story = {
	args: {
		title: "Hello",
		date: "2020-2023",
		description: "Something happening here",
	},
}
