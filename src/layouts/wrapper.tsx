// @ts-check
// Wrapper.tsx, wraps the content

import React from "react"

interface IWrapperProperties {
	children: React.ReactElement
}

const Wrapper: React.FC<IWrapperProperties> = ({ children, ...rest }) => {
	return (
		<div className="w-full lg:w-1/2 flex mt-14 p-5 h-full" {...rest}>
			{children}
		</div>
	)
}

export default Wrapper
