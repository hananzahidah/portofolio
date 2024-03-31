import { useState } from "react";
import Bars from "./icon";
import Close from "./close";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }

    const handleContentClick = () => {
        setClick(false);
    };

    const contents = <>
    <div className="lg:hidden block absolute top-16 w-full h-screen left-0 right-0 bg-navbar transition">
        <ul className="text-center text-xl p-20">
            <a href="#home" onClick={handleContentClick}>
                <li className="my-4 py-4 hover:bg-gray-300 hover:rounded" >Home</li>
            </a>
            <a href="#about" onClick={handleContentClick}>
                <li className="my-4 py-4 hover:bg-gray-300 hover:rounded" >About</li>
            </a>
            <a href="#project" onClick={handleContentClick}>
                <li className="my-4 py-4 hover:bg-gray-300 hover:rounded" >Project</li>
            </a>
            <a href="#contact" onClick={handleContentClick}>
                <li className="my-4 py-4 hover:bg-gray-300 hover:rounded" >Contact</li>
            </a>
        </ul>
    </div>
    </>

    return(

            <div className="fixed bg-navbar bg-opacity-70 justify-between top-0 left-0 w-full flex items-center z-50 px-5 py-5 md:px-10">
                <div className="flex items-center flex-1">
                    <span className="font-bold text-xl block"><a href="#home">HZ</a></span>
                </div>
                <div className="lg:flex md:flex items-center justify-end hidden">
                        <ul className="flex gap-8">
                        <li className="border-animation hover:text-rose-300 transition  border-slate-400 hover:border-rose-300 cursor-pointer font-semibold"><a href="#home">Home</a></li>
                        <li className="border-animation hover:text-rose-300 transition  border-slate-400 hover:border-rose-300 cursor-pointer font-semibold"><a href="#about">About</a></li>
                        <li className="border-animation hover:text-rose-300 transition  border-slate-400 hover:border-rose-300 cursor-pointer font-semibold"><a href="#project">Project</a></li>
                        <li className="border-animation hover:text-rose-300 transition  border-slate-400 hover:border-rose-300 cursor-pointer font-semibold"><a href="#contact">Contact</a></li>
                        </ul>
                </div>
                <div>
                    {click && contents}
                </div>
                <button className="block md:hidden transition w-5" onClick={handleClick}>
                    {click ? <Close/> : <Bars/>}
                </button>
            </div>
    )
}

export default Navbar;