import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/global.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import BhaveshImage from "../assets/images/Bhavesh.jpeg";
import ResumePDF from "../assets/pdfs/Bhaveshsinh Khasiya CV 2.pdf";

// Initialize AOS
AOS.init();

function Home() {
    return (
        <motion.div
            className="FirstElement"
            id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="profile-photo"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <img
                    src={BhaveshImage}
                    alt="Bhaveshsinh Khasiya"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                />
            </motion.div>

            <div className="profile-text">
                <motion.h5
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Hi, I'm
                </motion.h5>

                <motion.h1
                    style={{ padding: "20px 0px" }}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Bhaveshsinh Khasiya
                </motion.h1>

                <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Welcome to my portfolio website! I'm a passionate software developer
                    with a strong desire to create innovative solutions. I love design & coding and
                    problem-solving, always seeking new opportunities to learn and grow in
                    this ever-evolving field.
                </motion.p>

                <div className="btn-group">
                    <motion.a
                        href={ResumePDF}
                        className="btn active"
                        download="Bhaveshsinh-Khasiya-Resume.pdf"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Download CV
                    </motion.a>
                    <motion.a
                        href="mailto:khasiyabhaveshsinh@gmail.com"
                        className="btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact
                    </motion.a>
                </div>
                <div className="social">
                    {[
                        {
                            href: "mailto:khasiyabhaveshsinh@gmail.com",
                            icon: <FaEnvelope />,
                        },
                        {
                            href: "",
                            icon: <FaGithub />,
                        },
                        
                        {
                            href: "",
                            icon: <FaLinkedin />,
                        },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            whileHover={{ rotate: 360, scale: 1.2, color: "#fed700" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
