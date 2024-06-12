//import './Button.css';
import { useState } from 'react';
const Button = ({children, onClick}) => {

	return (
    <button
      onClick={onClick}
      className="ease-in-out duration-300
			bg-amber-300 
			p-2.5
			text-base	 
			rounded 
			text-slate-900 
			font-bold 
			hover:bg-amber-600 
			active:bg-amber-700 
			focus:outline-none 
			focus:ring 
			focus:ring-amber-300"
    >
      {children}
    </button>
  );
};

export default Button; 