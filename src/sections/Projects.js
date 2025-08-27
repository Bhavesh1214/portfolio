import React, { useState, useEffect } from "react";
import "../styles/global.css";
import projectData from "../data/projectData"; // Project data file
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Filter projects based on category
    const filteredProjects =
        selectedCategory === "All"
            ? projectData
            : projectData.filter((project) => project.category === selectedCategory);

    return (
        <>
            <motion.section
                className="project-content"
                id="projects"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container">
                    <motion.div
                        className="project-title"
                        data-aos="fade-down"
                    >
                        <h4>My Projects</h4>
                        <p>Discover my projects, where creativity meets innovation</p>
                    </motion.div>

                    {/* Category Filter Buttons */}
                    <motion.div
                        className="category-buttons"
                        data-aos="fade-up"
                    >
                        {["All", "Angular", "React","Next js" ,"Html","Css","Javascript"].map((category) => (
                            <button
                                key={category}
                                className={`btn ${selectedCategory === category ? "active" : ""}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    {/* Render Projects */}
                    <div className="projects">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                className="project"
                                key={project.id}
                                data-aos="zoom-in"
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.012 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="btn-group">
                                    <button
                                        className="btn active"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Modal (Popup) */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}

// Modal Component
function ProjectModal({ project, onClose }) {
    return (
        <motion.div
            className="modal-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="close-btn" onClick={onClose}>
                    &times;
                </span>
                <img src={project.image} alt={project.title} className="modal-image" />
                <h3>{project.title}</h3>
                <p className="modal-description">{project.description}</p>

                {/* Key Features Section */}
                <h4 className="modal-subtitle">Key Features:</h4>
                <ul className="modal-list">
                    {project.features.map((feature, index) => (
                        <motion.li
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {index + 1}. {feature}
                        </motion.li>
                    ))}
                </ul>

                <p className="modal-long-description">{project.long_description}</p>

                <div className="modal-buttons">
                    <a
                        href={project.liveDemo}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                    {/* <a
                        href={project.documentation}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Documentation
                    </a> */}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Projects;
