import React from "react";
import ReactTyped from "react-typed";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-100px] w-full h-screen mx-auto text-center flex flex-col items-center justify-center font-bold">
                <h1 className="text-4xl md:text-6xl md:mb-3 mb-1">Hi!</h1>
                <h2 className="text-2xl md:text-4xl mb-4">My name is Adil <br /> I'm 
                    <ReactTyped className="text-green-300" strings={[' Web Developer', ' Front-end Developer']}
                    typeSpeed={40} backSpeed={70} loop />
                </h2>
            </div>
        </div>
    )
}

export default Hero;