import "../styles/global.css";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <motion.section
      className="about-area"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="about row">
          {/* About Content */}
          <motion.div
            className="about-content col-md-6"
            data-aos="fade-right"
            transition={{ duration: 1 }}
          >
            <h4>About Me</h4>
            <ul>
  <li>
    I am in the final year of my Bachelor's in Computer Applications (BCA),
    specializing in UI/UX design. I have hands-on experience with design tools
    like Figma, Adobe XD, and Canva, along with a strong foundation in
    front-end technologies such as HTML, CSS, and JavaScript.
  </li>
  <li>
    My expertise lies in creating user-centered designs that balance aesthetics
    and functionality. I focus on wireframing, prototyping, usability testing,
    and delivering intuitive digital experiences across web and mobile
    platforms.
  </li>
  <li>
    I actively seek opportunities to expand my knowledge in design systems,
    accessibility, and emerging trends in user experience. I believe in
    continuous learning and applying creative problem-solving to enhance
    product usability.
  </li>
  <li>
    I am open to collaborations, freelance projects, and exciting opportunities
    in the field of UI/UX design. Feel free to explore my design work or reach
    out for any discussions.
  </li>
</ul>

          </motion.div>

          {/* About Skills */}
          <motion.div
            className="about-skills col-md-6"
            data-aos="fade-left"
            transition={{ duration: 1 }}
          >
            <ul>
              <li>
                <strong>Name:</strong> Bhaveshsinh Khasiya
              </li>
              <li>
                <strong>Age:</strong> 22
              </li>
              <li>
                <strong>From:</strong> India
              </li>
              <li>
                <strong>Email:</strong> khasiyabhaveshsinh@gmail.com
              </li>
              <li>
                <strong>Availability:</strong> Full-Time/Part-Time
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
