import React from "react";
import Logo from "../assets/logo.png"

const Header : React.FC = () => {
    return ( 
        <>
        <header className="flex items-center justify-center py-5">
            <div>
            <div className="flex items-center gap-3">
                <img className="w-20" src={Logo} alt="logo" />
                <p className="font-bold text-4xl">Starbucks</p>
            </div>
            <div className="text-center mt-4 font-bold text-[#2A3430]">
                <p>Starbucks Online Coffee Order</p>
            </div>
            </div>
        </header>
        </>
     );
}
 
export default Header;