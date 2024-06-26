import React, { useState } from "react";
import logo from "../../../public/Logo.svg";
import logo2 from "../../../public/logo2.svg";


const logos = [logo, logo2];

const Header = () => {

	const [logoIndex, setLogoIndex] = useState(0)

	const toggleLogo = () => {
		setLogoIndex(logoIndex === 0 ? 1 : 0)
	}

  return (
    <>
      <img className="w-2/3" src={logos[logoIndex]} alt="Personal Journal" onClick={toggleLogo}/>
    </>
  );
};

export default Header;
