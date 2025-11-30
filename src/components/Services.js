import React from "react";
import { FaRobot, FaCode, FaBrain, FaServer, FaChartLine, FaHandshake } from "react-icons/fa";

const Services = () => {
    const services = [
        {
            title: "Generative AI Solutions",
            description: "Custom LLM applications, RAG pipelines, and autonomous agents tailored to your business needs.",
            icon: <FaRobot size={40} className="text-white" />,
        },
        {
            title: "End-to-End MLOps",
            description: "Robust deployment pipelines, model monitoring, and scalable infrastructure using Docker & Kubernetes.",
            icon: <FaServer size={40} className="text-white" />,
        },
        {
            title: "AI & ML Development",
            description: "Predictive analytics, computer vision, and NLP models to solve complex data challenges.",
            icon: <FaBrain size={40} className="text-white" />,
        },
        {
            title: "Full-Stack Web Dev",
            description: "Modern, responsive web applications built with Next.js, React, and scalable backends.",
            icon: <FaCode size={40} className="text-white" />,
        },
        {
            title: "Data Strategy & Consulting",
            description: "Technical feasibility analysis and strategic roadmaps for AI adoption in your organization.",
            icon: <FaHandshake size={40} className="text-white" />,
        },
        {
            title: "Data Analytics & Visualization",
            description: "Transforming raw data into actionable insights with interactive dashboards and reporting.",
            icon: <FaChartLine size={40} className="text-white" />,
        },
    ];

    return (
        <div id="services" className="w-full p-2 py-16 bg-[#0a0a0a] text-white">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-white">Services</p>
                <h2 className="py-4 text-3xl font-bold">What I Offer</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white/5 backdrop-blur-md border border-white/20 flex flex-col items-center text-center group hover:bg-white/10"
                        >
                            <div className="p-4 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="font-bold text-2xl mb-4">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
