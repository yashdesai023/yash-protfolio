import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen p-2 bg-[#121212] text-white">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
                <p className="text-xl tracking-widest uppercase text-white">
                    Contact
                </p>
                <h2 className="py-4 text-3xl font-bold">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-700 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4">
                        <div className="lg:p-4 h-full ">
                            <div>
                                {/* <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt="/"
                /> */}
                                <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 mb-4">
                                    Contact Image
                                </div>
                            </div>
                            <div>
                                <h2 className="py-2 text-2xl font-bold">Yash</h2>
                                <p className="text-gray-400">Front-End Developer</p>
                                <p className="py-4 text-gray-300">
                                    I am available for freelance or full-time positions. Contact
                                    me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 text-white">Connect With Me</p>
                                <div className="flex items-center justify-between py-4">
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black">
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black">
                                            <FaGithub />
                                        </div>
                                    </a>
                                    <a href="mailto:yash@example.com">
                                        <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black">
                                            <AiOutlineMail />
                                        </div>
                                    </a>
                                    <Link href="/resume">
                                        <div className="rounded-full shadow-lg shadow-gray-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black">
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-700 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form
                                action="https://getform.io/f/your-form-id" // Replace with actual form handler
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 text-gray-300">Name</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-700 bg-[#2a2a2a] text-white focus:outline-none focus:border-white"
                                            type="text"
                                            name="name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2 text-gray-300">
                                            Phone Number
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-700 bg-[#2a2a2a] text-white focus:outline-none focus:border-white"
                                            type="text"
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 text-gray-300">Email</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-700 bg-[#2a2a2a] text-white focus:outline-none focus:border-white"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 text-gray-300">Subject</label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-700 bg-[#2a2a2a] text-white focus:outline-none focus:border-white"
                                        type="text"
                                        name="subject"
                                    />
                                </div>
                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2 text-gray-300">Message</label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 border-gray-700 bg-[#2a2a2a] text-white focus:outline-none focus:border-white"
                                        rows="10"
                                        name="message"
                                    ></textarea>
                                </div>
                                <button className="w-full p-4 text-black font-bold mt-4 bg-white rounded-xl hover:scale-105 ease-in duration-300 hover:bg-gray-200 cursor-pointer">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-700 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-black">
                            <HiOutlineChevronDoubleUp className="text-white" size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
