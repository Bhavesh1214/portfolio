import Jarves from "../assets/pdfs/JARVES.pdf";
import Finel from "../assets/pdfs/FINEL-MINOR-PROJECT-1 REPORT.pdf.pdf";
import Curd from "../assets/pdfs/CURD.pdf";
import React_temp from "../assets/pdfs/React_temp.pdf";
import Mkdp from "../assets/pdfs/MKDP.pdf";
import Wheeltrade from "../assets/pdfs/Wheel_trade.pdf";
import Portfolio from "../assets/pdfs/Portfolio.pdf";
import CitySync from "../assets/pdfs/citysync.pdf";
import Above_Edi from "../assets/pdfs/Above_edu.pdf";
import p6 from "../assets/images/Project-3-react.png";
import p5 from "../assets/images/Project-2-studant-chart.png";
import p4 from "../assets/images/Project-1-portfolio.png";
import p3 from "../assets/images/Project-4-car-portale.png";
// import p2 from "../assets/images/Project-5-car-web.png";
// import p1 from "../assets/images/Project-6-jarves.png";
import p7 from "../assets/images/Project-7-citysync.png";
import p1 from "../assets/images/legendcompany.png";
import p2 from "../assets/images/hirabaindustries.png";

const projectData = [
    // {
    //     "id": 1,
    //     "title": "J.A.R.V.I.S. Using Python",
    //     "description": "Developed J.A.R.V.I.S.(Just A Rather Very Intelligent System) using Python.",
    //     "long_description": "J.A.R.V.I.S. is a step toward intelligent personal assistants that enhance human-computer interaction, making technology more accessible and intuitive.",
    //     "category": "Python",
    //     "image": p1,
    //     "liveDemo": Jarves,
    //     "documentation": Jarves,
    //     "features": [
    //         "🛠 Voice Command Recognition - Uses advanced speech recognition to execute hands-free commands effortlessly.",
    //         "📈 Web Search Capabilities - Retrieves real-time information from the internet, including Wikipedia and Amazon searches.",
    //         "🎯 Email Integration - Allows users to compose and send emails via voice commands, supporting services like Gmail.",
    //         "🔧 Hardware Control - Enables system adjustments such as screen brightness, volume control, and screenshot capture.",
    //         "🔐 Facial Recognition - Identifies users and customizes responses based on personal preferences for a seamless experience."
    //     ]
    // },
    // {
    //     "id": 2,
    //     "title": "MKDP.PVT.LTD",
    //     "description": "Car showroom website using HTML, CSS, Bootstrap, JavaScript, and PHP.",
    //     "long_description": "The Car Showroom Website Project is a fully responsive web application designed to optimize the operations of automotive showrooms, improving customer interactions, inventory management, and service request handling.",
    //     "category": "PHP",
    //     "image": p2,
    //     "liveDemo": Mkdp,
    //     "documentation": Finel,
    //     "features": [
    //         "🚗 Project Overview - A web-based solution tailored for managing automotive showroom operations efficiently.",
    //         "🎯 Purpose - Enhances customer engagement, streamlines inventory tracking, and improves service request handling.",
    //         "🏆 Industry Significance - Addresses the growing need for customer-centric, digital showroom management.",
    //         "🔧 Key Features - Integrates inventory tracking, customer inquiries, service requests, and an AI-powered chatbot.",
    //         "🛠 Technological Stack - Utilizes PHP (backend), MySQL (database), Bootstrap (frontend), and OpenAI's ChatGPT for AI-powered customer support.",
    //         "📈 Anticipated Benefits - Boosts efficiency, enhances customer experience, and strengthens the competitive position of car showrooms."
    //     ]
    // },
    // {
    //     "id": 3,
    //     "title": "WheelTrade Dashboard",
    //     "description": "A fully functional car trading dashboard built with React for the frontend and Django REST Framework for the backend.",
    //     "long_description": "WheelTrade Dashboard is a powerful web application designed for managing car listings, user authentication, and invoice generation. Built with React and Django REST Framework, it ensures a seamless and efficient user experience. The system supports adding, updating, and deleting car details while dynamically generating invoices based on car prices. It also implements JWT authentication for secure user sessions and OTP verification for new user registrations.",
    //     "category": "Django+React",
    //     "image": p3,
    //     "liveDemo": "https://wheeltrade-deshbord.netlify.app/",
    //     "documentation": Wheeltrade,
    //     "features": [
    //         "🚀 Full-Stack Development - Built using React for the frontend and Django REST Framework for the backend.",
    //         "📜 CRUD Operations - Users can add, update, and delete car listings dynamically.",
    //         "💳 Invoice Generation - Automatically generates invoices based on car price details.",
    //         "🔐 JWT Authentication - Implements secure authentication using JSON Web Tokens.",
    //         "📩 OTP Verification - New user registration includes OTP verification for enhanced security.",
    //         "🌐 Cross-Origin API Integration - Backend hosted on PythonAnywhere, ensuring smooth communication between frontend and backend.",
    //         "🖥 Live Deployment - The frontend is deployed on Netlify, and backend APIs are hosted on PythonAnywhere."
    //     ]
    // },
    // {
    //     "id": 4,
    //     "title": "Dark Themed Portfolio",
    //     "description": "A modern, fully responsive portfolio website built with React, integrated with Google Sheets API to dynamically display skills and projects.",
    //     "long_description": "This portfolio serves as a professional showcase of my skills, projects, and achievements. Built using React, it dynamically fetches and displays my latest skills and project details using the Google Sheets API. The portfolio is fully responsive, ensuring an optimized viewing experience across devices. It includes a seamless day/night mode switch for better accessibility and a sleek, dark-themed UI for a modern and elegant look. Additionally, it provides direct access to my resume, social links, and a contact form for easy communication.",
    //     "category": "React",
    //     "image": p4,
    //     "liveDemo": "https://mayur-dodiya.netlify.app/",
    //     "documentation": Portfolio,
    //     "features": [
    //         "💻 Built with React - Designed for a smooth, interactive, and dynamic experience.",
    //         "📊 Google Sheets API Integration - Automatically updates skills and project details in real time.",
    //         "📱 Fully Responsive Design - Ensures a seamless experience on desktops, tablets, and mobile devices.",
    //         "🌙 Day & Night Mode - Users can toggle between light and dark themes for personalized viewing.",
    //         "📜 Resume & Social Links - Provides easy access to my resume and professional networking profiles.",
    //         "📩 Contact Form - Allows users to send messages directly through the website.",
    //         "🚀 Deployed on Netlify - Fast and secure hosting with a custom domain.",
    //         "🎨 Sleek UI & Animations - Engaging design with smooth transitions and modern styling."
    //     ]
    // },
    // {
    //     "id": 5,
    //     "title": "Student Management Portal",
    //     "description": "A full-fledged student management system built with React and Django REST Framework, providing efficient CRUD operations and seamless API integration.",
    //     "long_description": "The Student Management Portal is a web application designed to handle and manage student information effectively. Built with React for the frontend and Django REST Framework for the backend, it allows users to add, update, and delete student details dynamically through a well-structured API. The platform ensures secure user authentication and smooth interaction between the frontend and backend using cross-origin APIs. The frontend is deployed on Netlify, while the backend is hosted on PythonAnywhere, ensuring a reliable and scalable architecture.",
    //     "category": "Django+React",
    //     "image": p5,
    //     "liveDemo": "https://react-django-app.netlify.app/",
    //     "documentation": Curd,
    //     "features": [
    //         "📌 Full-Stack Development - React-based frontend with Django REST Framework backend.",
    //         "📝 Student Data Management - Supports adding, updating, and deleting student records.",
    //         "🔄 Real-Time API Communication - Ensures seamless frontend-backend integration with cross-origin APIs.",
    //         "🔐 User Authentication - Implements secure login and access management.",
    //         "📊 Responsive Design - Fully optimized for both desktop and mobile devices.",
    //         "📂 Database Integration - Stores and manages student records efficiently.",
    //         "🚀 Live Deployment - Frontend deployed on Netlify, backend hosted on PythonAnywhere.",
    //         "📑 RESTful API - Structured API endpoints for smooth data retrieval and updates."
    //     ]
    // },
    // {
    //     "id": 6,
    //     "title": "Figma-Based Static Website",
    //     "description": "A pixel-perfect static website designed based on a Figma layout, ensuring a visually stunning and responsive user experience.",
    //     "long_description": "This project is a fully static website developed following a detailed Figma design to achieve a clean and modern UI. The website is designed specifically for desktop and laptop screens, ensuring a structured and professional layout. Built with React, it focuses purely on UI implementation, without any backend functionality. The project includes smooth transitions, well-organized sections, and a visually appealing design that stays true to the original Figma prototype. The site is deployed on Netlify for easy accessibility.",
    //     "category": "React",
    //     "image": p6,
    //     "liveDemo": "https://md-temp-3.netlify.app/",
    //     "documentation": React_temp,
    //     "features": [
    //         "🎨 Figma to React Implementation - Designed to match the Figma prototype with high accuracy.",
    //         "🖥 Desktop-Optimized Layout - Tailored specifically for laptop and Windows screen sizes.",
    //         "⚡ Fast and Lightweight - Static website for ultra-fast loading speeds.",
    //         "🎭 Modern UI & Animations - Smooth transitions and clean, structured sections.",
    //         "🚀 Deployed on Netlify - Hosted with fast and secure deployment.",
    //         "📌 Well-Structured Codebase - Organized components for easy scalability."
    //     ]
    // },
    // {
    //     "id": 7,
    //     "title": "CitySync",
    //     "description": "Developed CitySync, a comprehensive service-based platform with distinct portals for Admin, Partners, and Users.And secure access control using Django fraimwork."
    //     ,
    //     "long_description": "CitySync is a robust, service-based web platform built as a 6th semester final project in 2025. Designed with Django, it enables seamless service management for cities with dedicated portals for Admins, Partners, and Users. It includes secure login systems, partner onboarding workflows, service request handling, and a role-based dashboard interface, making it ideal for scalable urban service delivery.",
    //     "category": "Django",
    //     "image": p7,
    //     "liveDemo": "https://citysync-official.onrender.com/",
    //     "documentation": CitySync,
    //     "features": [
    //         "🔐 Role-based Access - Admin, Partner, and User portals with proper access control.",
    //         "🛠 Partner Management - Onboarding, approvals, and service assignments.",
    //         "📦 Service Management - esliy add and booked the services.",
    //         "🌐 Django-Only Stack - Pure Django app with templated front end.",
    //         "🚀 Deployed on Render - Accessible via a live production URL."
    //     ]
    // },
    {
        "id": 8,
        "title": "Legend Company",
        "description": " At Legend Company, we specialize in delivering reliable and efficient washing machine repair services with a commitment to quality and customer satisfaction. Our expert technicians handle all major brands and models, ensuring your appliance runs smoothly and efficiently.",
        "long_description": "Comprehensive Repair Solutions Service for all washing machine types: top-load, front-load, semi-automatic, and fully automatic Repairs for all leading brands including LG, Samsung, Whirlpool, IFB, Bosch, Panasonic, Haier, and more",
        "category": "Angular",
        "image": p1,
        "liveDemo": "https://www.legendcompany.in/",
        "documentation": Above_Edi,
        "features": [
            
        ]
    },
    {
        "id": 8,
        "title": "Hiraba Industries",
        "description": " Hiraba Industries is a leading exporter of industrial fasteners and wire products, serving international markets with high-quality products and reliable export services. Our extensive export network spans across multiple continents, delivering premium industrial fasteners to global customers",
        "long_description": "All our products are manufactured using premium quality steel and materials, ensuring superior strength, durability, and performance for industrial applicationss",
        "category": "",
        "image": p2,
        "liveDemo": "https://hirabaindustries.com/",
        "documentation": Above_Edi,
        "features": [
            
        ]
    }

];

export default projectData;
