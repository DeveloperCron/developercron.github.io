import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export const NotFoundPage: React.FC = () => {
	const navigate = useNavigate()

	return (
		<div className="w-full justify-center items-center flex">
			<motion.div
				className="w-1/2 h-1/2 flex items-center justify-center flex-col gap-y-5"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<p className="text-8xl font-bold">Oops!</p>
				<p className="text-white text-sm text-center">Sorry, an unexpected error has occured!</p>
				<div>
					<button className="flex flex-row gap-x-2" onClick={() => navigate(-1)}>
						Redirect to
						<p className="flex flex-row gap-x-2 text-blue-500 justify-center items-center underline decoration-1">
							About
							<FontAwesomeIcon icon={faArrowRight} />
						</p>
					</button>
				</div>
			</motion.div>
		</div>
	)
}

export default React.memo(NotFoundPage)
