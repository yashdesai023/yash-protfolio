
import React from 'react';
import './SkillsTech.css';
import { SiFastapi, SiPython, SiTensorflow, SiPytorch, SiLangchain, SiScikitlearn, SiPandas, SiOpencv, SiFlask,
  SiDocker, SiGithubactions, SiJenkins,SiGooglecloud, SiRender, SiVercel, SiJavascript, SiCplusplus, SiMysql,
  SiPostman, SiNotion, SiJupyter, SiGit
} from 'react-icons/si';
import { RiInfinityLine } from 'react-icons/ri';
import { TbApi } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa6';
import { VscAzure,VscVscode } from 'react-icons/vsc';
import { FaJava } from 'react-icons/fa';




const SkillsTech = () => {
  return (
    <section id='skills-tech-section' className="skills-tech-section">
      <h2>Skills & Tech Stack</h2>
      <p className="subtitle">Tools and technologies I work with daily</p>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>AI & Machine Learning</h3>
          <div className="skills-list">
            <div className="skill-item"><SiPython/> Python</div>
            <div className="skill-item"><SiTensorflow /> TensorFlow</div>
            <div className="skill-item"><SiPytorch /> PyTorch</div>
            <div className="skill-item"><SiLangchain /> LangChain</div>
            <div className="skill-item"><SiScikitlearn /> Scikit-Learn</div>
            <div className="skill-item"><SiPandas /> Pandas</div>
            <div className="skill-item"><SiOpencv /> OpenCV</div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Backend & DevOps</h3>
          <div className="skills-list">
            <div className="skill-item"><SiFastapi /> FastAPI</div>
            <div className="skill-item"><SiFlask /> Flask</div>
            <div className="skill-item"><SiDocker /> Docker</div>
            <div className="skill-item"><SiGithubactions /> GitHub Actions</div>
            <div className="skill-item"><RiInfinityLine /> CI/CD</div>
            <div className="skill-item"><SiJenkins /> Jenkins</div>
            <div className="skill-item"><TbApi /> REST APIs</div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Cloud Platforms</h3>
          <div className="skills-list">
            <div className="skill-item"><FaAws /> AWS</div>
            <div className="skill-item"><SiGooglecloud /> GCP</div>
            <div className="skill-item"><VscAzure /> Azure</div>
            <div className="skill-item"><SiRender /> Render</div>
            <div className="skill-item"><SiVercel /> Vercel</div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <div className="skill-item"><SiPython /> Python</div>
            <div className="skill-item"><FaJava /> Java</div>
            <div className="skill-item"><SiCplusplus /> C++</div>
            <div className="skill-item"><SiJavascript /> JavaScript</div>
            <div className="skill-item"><SiMysql /> SQL</div>
          </div>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <div className="skills-list">
            <div className="skill-item"><VscVscode /> VS Code</div>
            <div className="skill-item"><SiPostman /> Postman</div>
            <div className="skill-item"><SiNotion /> Notion</div>
            <div className="skill-item"><SiJupyter /> Jupyter</div>
            <div className="skill-item"><SiGit /> Git</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsTech;
