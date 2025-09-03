import "../styles/global.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function EducationInternship() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <motion.section
      className="education-content"
      id="education"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        padding: "3rem 0px 6rem 0",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Certifications */}
          <motion.div className="internship" data-aos="fade-right">
            <h3 className="title">Certifications</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  {[
                   
                    {
                      title: "Patel Web Solution",
                      date: "JAN-2025",
                      desc: "",
                    },
                    {
                      title: "Certificate of CCC",
                      org: "INFOTACH",
                      date: "JUNE-2022",
                      desc: "Successfully completed 'Course on Computer Concepts - CCC' with an A+ grade.",
                    },
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      data-aos="fade-up"
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="circle-dot"></div>
                      <h3 className="timeline-title">{cert.title}</h3>
                      <h4 className="timeline-title">{cert.org}</h4>
                      <h4 className="timeline-title">
                        <i className="fa fa-calendar"></i> {cert.date}
                      </h4>
                      <p className="timeline-text">{cert.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div className="education" data-aos="fade-left">
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  {[
                    { title: "B.C.A", org: "Shree A R Bhatt Collge", date: "2021-2024" },
                    { title: "HSC - 68%", org: "Tapovan Vidhya Sankul", date: "2018-2020" },
                    { title: "SSC - 63%", org: "Tapovan Vidhya Sankul", date: "2017-2018" },
                  ].map((edu, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      data-aos="fade-up"
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="circle-dot"></div>
                      <h3 className="timeline-title">{edu.title}</h3>
                      <h4 className="timeline-title">{edu.org}</h4>
                      <h4 className="timeline-title">
                        <i className="fa fa-calendar"></i> {edu.date}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internship */}
          <motion.div className="education" data-aos="fade-right">
            <h3 className="title">Experience</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  {[
                    { title: "UI/UX", org: "", date: "JAN-2025 - Present" },
                    { title: "Frontend Developer", org: "CodeQuality Technologies", date: "SEP-2022 - DEC-2024" },
                  ].map((intern, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      data-aos="fade-up"
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="circle-dot"></div>
                      <h3 className="timeline-title">{intern.title}</h3>
                      <h4 className="timeline-title">{intern.org}</h4>
                      <h4 className="timeline-title">
                        <i className="fa fa-calendar"></i> {intern.date}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default EducationInternship;
