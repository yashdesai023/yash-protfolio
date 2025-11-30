import React from "react";
import {
  SiFastapi,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiScikitlearn,
  SiPandas,
  SiOpencv,
  SiFlask,
  SiDocker,
  SiGithubactions,
  SiJenkins,
  SiGooglecloud,
  SiRender,
  SiVercel,
  SiJavascript,
  SiCplusplus,
  SiMysql,
  SiPostman,
  SiNotion,
  SiJupyter,
  SiGit,
  SiHuggingface,
  SiOpenai,
  SiSpringboot,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
  SiSelenium,
  SiTableau,
} from "react-icons/si";
import { TbApi, TbBrain, TbMathFunction } from "react-icons/tb";
import { FaAws, FaJava, FaDatabase, FaRobot, FaChartLine, FaMagnifyingGlass } from "react-icons/fa6";
import { VscAzure, VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      skills: [
        { name: "LLM Dev", icon: <SiOpenai size={20} /> },
        { name: "Prompt Eng", icon: <FaRobot size={20} /> },
        { name: "LangChain", icon: <SiLangchain size={20} /> },
        { name: "RAG", icon: <FaMagnifyingGlass size={20} /> },
        { name: "Vector DBs", icon: <FaDatabase size={20} /> },
        { name: "Hugging Face", icon: <SiHuggingface size={20} /> },
        { name: "OpenAI/Gemini", icon: <SiOpenai size={20} /> },
        { name: "Agents", icon: <FaRobot size={20} /> },
      ],
    },
    {
      title: "Machine Learning & DL",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow size={20} /> },
        { name: "PyTorch", icon: <SiPytorch size={20} /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn size={20} /> },
        { name: "OpenCV", icon: <SiOpencv size={20} /> },
        { name: "CNN/RNN", icon: <TbBrain size={20} /> },
        { name: "Optimization", icon: <TbMathFunction size={20} /> },
      ],
    },
    {
      title: "MLOps & Deployment",
      skills: [
        { name: "FastAPI", icon: <SiFastapi size={20} /> },
        { name: "Flask", icon: <SiFlask size={20} /> },
        { name: "Docker", icon: <SiDocker size={20} /> },
        { name: "GitHub Actions", icon: <SiGithubactions size={20} /> },
        { name: "Jenkins", icon: <SiJenkins size={20} /> },
        { name: "AWS", icon: <FaAws size={20} /> },
        { name: "GCP", icon: <SiGooglecloud size={20} /> },
        { name: "Azure", icon: <VscAzure size={20} /> },
      ],
    },
    {
      title: "Backend Engineering",
      skills: [
        { name: "Java", icon: <FaJava size={20} /> },
        { name: "Spring Boot", icon: <SiSpringboot size={20} /> },
        { name: "REST APIs", icon: <TbApi size={20} /> },
        { name: "SQL", icon: <SiMysql size={20} /> },
        { name: "Auth (JWT)", icon: <SiJsonwebtokens size={20} /> },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <SiGit size={20} /> },
        { name: "Postman", icon: <SiPostman size={20} /> },
        { name: "VS Code", icon: <VscVscode size={20} /> },
        { name: "Linux", icon: <SiDocker size={20} /> }, // Using Docker icon as proxy for Linux containerization if SiLinux not available, or just generic terminal
      ],
    },
    {
      title: "Data Analytics",
      skills: [
        { name: "Python", icon: <SiPython size={20} /> },
        { name: "Pandas", icon: <SiPandas size={20} /> },
        { name: "Jupyter", icon: <SiJupyter size={20} /> },
        { name: "Visualization", icon: <SiTableau size={20} /> },
      ],
    },
  ];

  return (
    <div id="skills" className="w-full p-2 py-16 bg-[#121212] text-white">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-white">Skills</p>
        <h2 className="py-4 text-3xl font-bold">What I Can Do</h2>
        <div className="grid md:grid-cols-3 justify-center gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white/5 backdrop-blur-md border border-white/20"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="font-bold text-xl mb-4 text-center border-b border-white/30 pb-2 w-full">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full justify-center hover:bg-white hover:text-black transition-colors duration-300 cursor-default border border-white/20"
                    >
                      <span className="">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
