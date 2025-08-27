/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../styles/global.css";
import { BiMenu } from "react-icons/bi"; // Correct import for the "menu" icon
import logo from "../assets/images/bhavesh_logo.png"; // Correct import for the logo image

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "default";
  });

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a link is clicked (for smaller screens)
  const handleLinkClick = () => {
    if (window.innerWidth <= 767) {
      setMenuOpen(false); // Close the menu when a link is clicked
    }
  };

  // Handle sticky header on scroll
  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  // Update active section based on scroll position
  const updateActiveSection = () => {
    const scrollPosition = window.scrollY;
    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section) {
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        if (
          scrollPosition >= offset - 40 &&
          scrollPosition < offset + height - 40
        ) {
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  };

  // Theme toggle handler
  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("default");
      localStorage.removeItem("theme");
    } else {
      setTheme("light-mode");
      localStorage.setItem("theme", "light-mode");
    }
  };

  // Apply theme on mount
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Add event listeners on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", () => {
      if (window.innerWidth > 999) {
        setMenuOpen(false); // Reset menu state on larger screens
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <>
      <header className={`header-area ${isSticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="header">
            {/* <a className="logo">爪卂ㄚㄩ尺 。</a> */}
            <img src={logo} alt="logo" className="logo" />
            <ul className={`navbar ${menuOpen ? "open" : ""}`}>
              <li>
                <a href="#home" onClick={handleLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleLinkClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#education" onClick={handleLinkClick}>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleLinkClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleLinkClick}>
                  Contact
                </a>
              </li>
              <li>
                <label className="switch">
                  <input
                    type="checkbox"
                    id="theme-toggle"
                    checked={theme === "light-mode"}
                    onChange={toggleTheme}
                  />
                  <span className="slider"></span>
                </label>
              </li>
            </ul>
            <div className="menu_icon" onClick={toggleMenu}>
              <BiMenu size={30} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
