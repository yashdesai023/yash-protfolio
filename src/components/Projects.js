import React from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "../data/projectsData";

const ProjectItem = ({ title, backgroundImg, projectUrl, tech }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-700 rounded-xl group overflow-hidden bg-white/5 backdrop-blur-md border border-white/20">
            <Image className="rounded-xl group-hover:opacity-10 object-cover w-full h-full" src={backgroundImg} alt={title} width={640} height={360} />
            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm transition-all duration-300">
                <h3 className="text-2xl text-white tracking-wider text-center font-bold">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">{tech}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-3 px-8 rounded-lg bg-white text-black font-bold text-lg cursor-pointer hover:bg-gray-200 transition-colors">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};

const Projects = () => {
    const [visibleProjects, setVisibleProjects] = React.useState(4);
    const projects = projectsData;

    const handleShowMoreLess = () => {
        if (visibleProjects < projects.length) {
            setVisibleProjects(projects.length);
        } else {
            setVisibleProjects(4);
        }
    };

    return (
        <div id="projects" className="w-full p-2 py-16 bg-[#0a0a0a] text-white">
            <div className="max-w-[1240px] mx-auto px-2">
                <p className="text-xl tracking-widest uppercase text-white">
                    Projects
                </p>
                <h2 className="py-4 text-3xl font-bold">What I&#39;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.slice(0, visibleProjects).map((project, index) => (
                        <ProjectItem
                            key={index}
                            title={project.title}
                            backgroundImg={project.backgroundImg}
                            projectUrl={project.projectUrl}
                            tech={project.tech}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <button
                        onClick={handleShowMoreLess}
                        className="p-4 rounded-xl uppercase bg-white text-black font-bold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                    >
                        {visibleProjects < projects.length ? "Load More Projects" : "Show Less"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
