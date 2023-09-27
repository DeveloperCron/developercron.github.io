import type { Meta, StoryObj } from "@storybook/react"

import { faReact } from "@fortawesome/free-brands-svg-icons"

import Badge from "@/components/badge"

const meta: Meta<typeof Badge> = {
	component: Badge,
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
	args: {
		icon: faReact,
		label: "React",
		iconColor: "rgb(83,211,249)",
		badgeKind: "Icon",
	},
}
