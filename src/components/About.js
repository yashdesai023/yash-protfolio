import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 bg-[#0a0a0a] text-white">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-white">About</p>
                    <h2 className="py-4 text-3xl font-bold">Who I Am</h2>
                    <p className="py-2 text-gray-400">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        &#47;&#47; Generative AI & Machine Learning Engineer
                    </p>
                    <p className="py-2 text-gray-300">
                        I have a strong foundation in Java/Spring Boot backend engineering and applied expertise in LLM development, AI Agents, ML modeling, and MLOps. My work centers around LLM-powered applications, Agentic AI systems, RAG pipelines, ML model development, and end-to-end deployment pipelines using modern MLOps tools.
                    </p>
                    <p className="py-2 text-gray-300">
                        With hands-on experience in Python, LangChain, TensorFlow, Docker, FastAPI, GitHub Actions, and cloud-ready architectures, I bridge the gap between backend reliability and AI innovation. I thrive on designing solutions that are scalable, real-world ready, and optimized for organizations looking to implement AI-driven automation and intelligent applications.
                    </p>
                    <p className="py-2 text-gray-300">
                        I’m currently seeking opportunities in Generative AI, AI Engineering, ML Engineering, and MLOps.
                    </p>
                    <p className="py-2 text-white underline cursor-pointer hover:text-gray-300">
                        Check out some of my latest projects.
                    </p>
                </div>
                <div className="w-full h-auto m-auto flex items-center justify-center hover:scale-105 ease-in duration-300">
                    <Image
                        src="/about.png"
                        className="rounded-xl [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"
                        alt="About Yash"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
