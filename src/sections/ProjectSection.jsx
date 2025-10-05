
import React from 'react';
import './ProjectSection.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Placeholder data for projects
const projects = [
  {
    title: 'AI Number Plate Detection',
    description: 'A real-time vehicle number plate detection system using OCR and OpenCV.',
    tech: ['Python', 'TensorFlow', 'Flask', 'Docker'],
    image: '/image.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'E-commerce Analytics Dashboard',
    description: 'An analytics platform for visualizing sales data and customer behavior.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    image: '/image.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Cloud File Storage Service',
    description: 'A scalable, S3-like file storage solution built with a microservices architecture.',
    tech: ['Go', 'gRPC', 'Kubernetes', 'AWS S3'],
    image: '/image.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Smart Chatbot Assistant',
    description: 'An intelligent chatbot for customer support using natural language processing.',
    tech: ['LangChain', 'FastAPI', 'Vercel', 'AI'],
    image: '/image.png',
    liveUrl: '#',
    githubUrl: '#',
  },
    {
    title: 'IoT Environmental Monitor',
    description: 'A system for collecting and visualizing real-time environmental data from IoT sensors.',
    tech: ['MQTT', 'InfluxDB', 'Grafana', 'Raspberry Pi'],
    image: '/image.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website V2',
    description: 'A personal site to showcase my skills and projects, built with modern web tech.',
    tech: ['React', 'Vite', 'Firebase', 'CSS Modules'],
    image: '/image.png',
    liveUrl: '#',
    githubUrl: '#',
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.title} className="project-image" />
    <div className="project-overlay">
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech-tags">
          {project.tech.map(tag => <span key={tag} className="tech-tag">{tag}</span>)}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FiExternalLink /> Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaGithub /> GitHub Repo
          </a>
        </div>
      </div>
    </div>
  </div>
);


const ProjectSection = () => {
  return (
    <section id='projects-section' className="projects-section">
      <h2>Featured Projects</h2>
      <p className="section-subheading">
        A collection of my most impactful AI and software engineering projects — combining innovation with real-world utility.
      </p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
