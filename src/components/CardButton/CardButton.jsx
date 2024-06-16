import React from 'react'

const CardButton = ({children ,className, selected, ...props}) => {
	const cl = `block cursor-pointer p-5 rounded w-full 	
	${className ? className : "text-left"}
	${
    selected
      ? "bg-amber-300 hover:bg-amber-600"
      : "bg-zinc-800 hover:bg-zinc-700"
  }`;
	return (
		<button {...props} className={cl}>{children}</button>
	)
}

export default CardButton