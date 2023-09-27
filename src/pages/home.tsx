/* eslint-disable react/no-unescaped-entities */
// @ts-check
// Home.tsx, HomePage, the index

import React, { memo } from "react"
import { motion } from "framer-motion"

import Wrapper from "@/layouts/wrapper"
import Badge from "@/components/badge"
import ContactCard from "@/components/contactCard"
import { cardsData } from "@/constants/contactCards"

import { faReact } from "@fortawesome/free-brands-svg-icons"

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
}

const HomePage: React.FC = () => {
	return (
		<Wrapper>
			<motion.div
				className="flex flex-col justify-center gap-y-3 w-full"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="flex flex-col gap-y-5 w-full p-5">
					<motion.h1 className="text-2xl font-bold text-white">hello, I'm Lior 👋 </motion.h1>
					<p className=" text-gray-300">
						I'm Lior Shaposhnikov, AKA Dev_Cron. I'm a Roblox Developer. Welcome to my homepage, here I'll
						write blogs in the future, and post some work I've done before.
					</p>
					<p>
						I create interactive Android and iOS apps and websites using
						<span className="inline-flex items-center ml-2">
							<Badge
								iconColor="rgb(83, 211, 249)"
								icon={faReact}
								label="React"
								href="https://react.dev/"
								badgeKind="Icon"
							/>
						</span>
						. Also as a habit, I contribute to open-source tools and make my own Roblox games!
					</p>
				</div>
				<hr className="border m-2 border-neutral-800" />
				<h1 className="p-5">If you wish to contact me do it via the options provided below</h1>
				{/* This is shit to make, if u have better way I want to use the better way of making a grid like this */}
				<motion.ul
					variants={container}
					initial="hidden"
					animate="visible"
					className="w-full items-center justify-center grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 p-5"
				>
					{cardsData.map((item, key) => (
						<ContactCard key={`contact-${key}`} label={item.label} href={item.href} />
					))}
				</motion.ul>
			</motion.div>
		</Wrapper>
	)
}

export default memo(HomePage)
