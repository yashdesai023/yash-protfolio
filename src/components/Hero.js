"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div id="home" className="w-full h-screen bg-[#121212] text-white">
            <div className="max-w-[1240px] w-full h-full mx-auto flex flex-col md:flex-row justify-center items-center p-4">

                {/* Text Section */}
                <div className="flex flex-col justify-center md:items-start w-full md:w-1/2 space-y-4">
                    <p className="uppercase text-white font-bold tracking-widest text-sm">
                        LET&#39;S BUILD SOMETHING LEGENDARY TOGETHER
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I&#39;m <span className="text-white">Yash Desai</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-400">
                        I&#39;m a{" "}
                        <TypeAnimation
                            sequence={[
                                "Generative AI Engineer",
                                2000,
                                "Machine Learning Engineer",
                                2000,
                                "Backend Developer",
                                2000,
                                "AI Agent Specialist",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-white"
                        />
                    </h2>
                    <p className="py-4 text-gray-400 max-w-[70%] text-lg">
                        I specialize in building intelligent, production-ready AI systems that automate workflows, enhance business efficiency, and deliver measurable results.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            View Projects
                        </button>
                        <button className="px-6 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-black transition duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex justify-center items-end">
                        <Image
                            src="/Yash-img.png"
                            alt="Yash Desai"
                            fill
                            className="object-contain [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
