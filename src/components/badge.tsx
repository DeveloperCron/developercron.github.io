// @ts-check
// badge.tsx
import React from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type ReadonlyProps<T> = {
	readonly [P in keyof T]: T[P]
}

// Define a custom type 'Kind' with two possible values: "Icon" or "Text"
type Kind = "Icon" | "Text"

// Define the 'BadgeProperties' interface to represent the properties of the 'Badge' component
interface BadgeProperties {
	badgeKind: Kind // Indicates whether the badge should display an icon or text
	icon?: IconProp // An optional icon to display in the badge (import 'IconProp' from your icon library)
	iconColor?: string // An optional color for the icon
	label: string // The label or text content of the badge
	href?: string // Badge link
}

type ReadonlyComponentProps = ReadonlyProps<BadgeProperties>

// 'Badge' React component that displays a badge based on 'BadgeProperties'
const Badge: React.FC<ReadonlyComponentProps> = ({ badgeKind, icon, iconColor, label, href }) => {
	href = href || undefined

	return (
		<a
			className="w-fit h-auto justify-between items-center flex flex-row border border-neutral-700 rounded-lg text-sm bg-neutral-900 p-1 gap-x-2 cursor-pointer hover:border-blue-500 hover:bg-neutral-800 duration-75 ease-in"
			href={href}
		>
			{badgeKind === "Icon" && icon ? <FontAwesomeIcon icon={icon} color={iconColor} /> : null}
			{label}
		</a>
	)
}
export default Badge
