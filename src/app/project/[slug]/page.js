import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { projectsData } from "../../../data/projectsData";

const ProjectPage = async ({ params }) => {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
                <h1 className="text-2xl">Project Not Found</h1>
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-hidden bg-[#0a0a0a] text-white">
            {/* Header / Hero Section */}
            <div className="w-full h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={project.backgroundImg}
                    alt={project.title}
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2 text-4xl font-bold">{project.title}</h2>
                    <p className="text-xl text-gray-300 mb-4">{project.tech}</p>
                    <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">{project.date}</p>

                    <div className="flex flex-wrap gap-4">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all flex items-center gap-2">
                                <FaExternalLinkAlt /> Live Project
                            </button>
                        </a>
                        <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <button className="px-8 py-2 mt-4 mr-8 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                                <FaPlay /> View Demo
                            </button>
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <button className="px-8 py-2 mt-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                                <FaGithub /> Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <div className="mb-12">
                        <p className="text-xl tracking-widest uppercase text-[#5651e5] mb-4">Project</p>
                        <h2 className="text-3xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {project.overview}
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mt-4">
                            {project.description}
                        </p>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {project.features && project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-4">Challenges & Solutions</h3>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl mb-4">
                            <h4 className="font-bold text-xl mb-2 text-red-400">Challenge</h4>
                            <p className="text-gray-300">{project.challenges}</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                            <h4 className="font-bold text-xl mb-2 text-green-400">Solution</h4>
                            <p className="text-gray-300">{project.solutions}</p>
                        </div>
                    </div>

                    <Link href="/#projects">
                        <p className="underline cursor-pointer text-gray-400 hover:text-white transition-colors">Back</p>
                    </Link>
                </div>

                {/* Sidebar / Tech Stack */}
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-700 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-4 h-fit">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2 border-b border-gray-600">Technologies</p>
                        <div className="grid grid-cols-1 gap-y-4 py-4">
                            {project.tech.split(', ').map((tech, index) => (
                                <p key={index} className="text-gray-300 flex items-center py-1">
                                    <RiRadioButtonFill className="pr-1 text-white" /> {tech}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
