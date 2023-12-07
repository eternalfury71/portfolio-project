import React from "react";
import myimg from "../images/2023-11-26 16.01.30.jpg"

const About = () => {
    return (
        <section className="w-screen min-h-[600px] px-[116px] bg-white md:flex">
            <div className="flex flex-col justify-center items-center max-w-[500px]">
                <img src={myimg} alt="" className="rounded-full w-52 h-52 md:w-56 md:h-56 object-cover mb-8 mx-auto"/>
                <p className="text-xl text-center md:text-2xl">Hi, I'm Adil, a 25-year-old who loves creating cool and user-friendly websites. I make the online world look good and work smoothly as a frontend developer.</p>
            </div>
            <div>
                <button className="bg-green-400 p-2 text-white rounded-md md:hidden">Skills</button>
            </div>
        </section>
    )
}




export default About;