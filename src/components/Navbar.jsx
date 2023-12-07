import React, {useState} from "react";
import { IoMenuSharp, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="text-2xl md:text-4xl font-bold w-full text-green-300">Portfolio Adil</h1>
            <ul className="uppercase hidden md:flex">
                <li className="p-4 cursor-pointer hover:text-gray-400">Home</li>
                <li className="p-4 cursor-pointer hover:text-gray-400">About</li>
                <li className="p-4 cursor-pointer hover:text-gray-400">Projects</li>
                <li className="p-4 cursor-pointer hover:text-gray-400">Contact</li>
            </ul>
            <div onClick={handleClick} className="block md:hidden">
                {nav ? <IoClose size={20} className="cursor-pointer"/> : <IoMenuSharp size={20} className="cursor-pointer"/>}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-950 bg-[#000300] ease-in-out duration-500": "fixed left-[-100%]"}>
                <ul className="pt-24 uppercase">
                    <li className="p-4 border-b border-b-gray-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-y-110 cursor-pointer hover:bg-gray-100 hover:text-black">Home</li>
                    <li className="p-4 border-b border-b-gray-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-y-110 cursor-pointer hover:bg-gray-100 hover:text-black">About</li>
                    <li className="p-4 border-b border-b-gray-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-y-110 cursor-pointer hover:bg-gray-100 hover:text-black">Projects</li>
                    <li className="p-4 border-b border-b-gray-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-y-110 cursor-pointer hover:bg-gray-100 hover:text-black">Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;