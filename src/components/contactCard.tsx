// @ts-check
// @component contactCard.tsx,
import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"

const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
}

type ReadonlyProps<T> = {
	readonly [P in keyof T]: T[P]
}

export interface ContactCardProperties {
	label: string
	href: string
}

type ReadonlyComponentProps = ReadonlyProps<ContactCardProperties>

const ContactCard: React.FC<ReadonlyComponentProps> = ({ label, href }) => {
	return (
		<motion.li variants={item} className="list-none w-full flex">
			<motion.a
				href={href}
				aria-label={`contact-${label}`}
				className="w-full lg:w-70 border border-neutral-700 flex rounded-lg p-4 items-center justify-between hover:bg-neutral-800 duration-75 ease-in cursor-pointer hover:border-blue-500"
			>
				<p className="text-md font-semibold">{label}</p>
				<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
			</motion.a>
		</motion.li>
	)
}
export default ContactCard
