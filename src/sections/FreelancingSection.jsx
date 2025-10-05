import React from 'react';
import './FreelancingSection.css';
import { FaBrain, FaServer, FaChartBar, FaCamera } from 'react-icons/fa';

const services = [
  {
    icon: <FaBrain />,
    title: 'Generative AI Development',
    description: 'Building intelligent GenAI solutions like chatbots, AI assistants, and content generators using OpenAI, LangChain, and custom LLM fine-tuning.',
    tech: ['Python', 'OpenAI API', 'LangChain', 'Vector DBs'],
  },
  {
    icon: <FaCamera />,
    title: 'Machine Learning & Computer Vision',
    description: 'Developing predictive and vision-based models—from medical image analysis to license plate recognition—with scalable ML pipelines.',
    tech: ['TensorFlow', 'Scikit-learn', 'OpenCV', 'FastAPI'],
  },
  {
    icon: <FaServer />,
    title: 'Backend & API Development',
    description: 'Designing fast, reliable, and secure backend systems with clean architecture and modern APIs for AI or web-based applications.',
    tech: ['Flask', 'FastAPI', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analytics & Visualization',
    description: 'Transforming complex datasets into actionable insights using dashboards and visual storytelling.',
    tech: ['Pandas', 'PowerBI', 'Matplotlib', 'Plotly'],
  },
];

const ServiceCard = ({ service }) => (
  <div className="service-card">
    <div className="service-icon">{service.icon}</div>
    <h3>{service.title}</h3>
    <p>{service.description}</p>
    <div className="service-tech">
      {service.tech.map(tag => <span key={tag}>{tag}</span>)}
    </div>
  </div>
);

const FreelancingSection = () => {
  return (
    <section id='freelancing-section' className="freelancing-section">
      <div className="section-header">
        <h2>Freelance & Services</h2>
        <p className="tagline">Helping startups and businesses transform ideas into intelligent digital solutions.</p>
      </div>

      <div className="services-grid">
        {services.map(service => <ServiceCard key={service.title} service={service} />)}
      </div>

      <div className="cta-banner">
        <h3>Want to build something amazing together?</h3>
        <a href="#contact-section" className="btn btn-primary">Let's Connect</a>
      </div>
    </section>
  );
};

export default FreelancingSection;
