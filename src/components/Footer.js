import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/global.css";

function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 30 }} // Fade in from bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.small 
        className="message"
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Thanks for visiting and happy coding!
      </motion.small>

      <motion.small 
        className="copyright"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        &copy; Copyright 2024. All rights reserved.
      </motion.small>
    </motion.footer>
  );
}

export default Footer;
