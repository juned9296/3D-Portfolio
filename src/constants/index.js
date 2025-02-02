// src/constants/index.js

// Import assets and images
import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, tesla, shopify,starbucks, carrent, jobit, tripguide, threejs } from "../assets";
import p1 from "../../public/project-1.png";
import p2 from "../../public/project-2.png";
import p3 from "../../public/project-3.png";
import p4 from "../../public/project-4.png";
import p5 from "../../public/project-5.png";
import p6 from "../../public/project-6.png";
import p7 from "../../public/project-7.png";
import p8 from "../../public/project-8.png";
import p9 from "../../public/project-9.png";
import p10 from "../../public/project-10.png";
import p11 from "../../public/project-11.png";
import p12 from "../../public/project-12.png";
import p13 from "../../public/project-13.png";
import p14 from "../../public/project-14.png";
import p15 from "../../public/project-15.png";

// Default export for navLinks
const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// Default export for services
const services = [
  { title: "Web Developer", icon: web },
  { title: "iOS Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

// Default export for technologies
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

// Default export for experiences
const experiences = [
  {
    title: "Video Editor",
    company_name: "WebX Learner",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jan 2022 - Jul 2023",
    points: [
      "Edited and produced engaging video content.",
      "Collaborated with creative teams to bring video concepts to life.",
      "Optimized video content for different platforms.",
      "Managed multiple video projects simultaneously.",
    ],
  },
  {
    title: "Freelance React Developer",
    company_name: "Devishsa Tech",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jul 2023",
    points: [
      "Developed custom web solutions using React.js.",
      "Collaborated with designers and other developers.",
      "Focused on responsive design and cross-browser compatibility.",
      "Provided regular project updates and suggestions to clients.",
    ],
  },
  {
    title: "Web Developer Internship",
    company_name: "Digital Bheem",
    icon: meta,
    iconBg: "#383E56",
    date: "Jul 2023 - Jan 2024",
    points: [
      "Developed and maintained web applications.",
      "Collaborated with cross-functional teams.",
      "Ensured responsiveness and cross-browser compatibility.",
      "Participated in team discussions and learning.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "ASV Consulting Services",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Developed MERN stack applications.",
      "Worked closely with designers and developers.",
      "Ensured websites perform well across different devices.",
      "Participated in code reviews and shared knowledge.",
    ],
  },
];

// Default export for testimonials
const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Default export for projects
const projects = [
  {
    name: "StarxMovies Web App",
    description: "A platform for streaming and discovering movies with personalized recommendations based on user preferences.",
    image: p1,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/starxmovies",
    live_demo_link: "https://starxmovies-demo.com",
    category: "web",
  },
  {
    name: "RentUP Real Estate Web App",
    description: "A user-friendly platform to browse, buy, and rent properties with advanced search filters.",
    image: p2,
    tags: [
      { name: "MP", color: "text-red-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/rentup",
    live_demo_link: "https://rentup-demo.com",
    category: "web",
  },
  {
    name: "E-Commerce Website (Working on)",
    description: "An e-commerce platform under development with a focus on a smooth shopping experience and seamless checkout.",
    image: p3,
    tags: [
      { name: "MP", color: "text-red-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/ecommerce-website",
    live_demo_link: "https://ecommerce-demo.com",
    category: "web",
  },
  {
    name: "Latest E-Commerce Website (Working on)",
    description: "Building an advanced e-commerce website with integration of AI-powered recommendation systems.",
    image: p4,
    tags: [
      { name: "MP", color: "text-red-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/latest-ecommerce",
    live_demo_link: "https://latest-ecommerce-demo.com",
    category: "web",
  },
  {
    name: "Calculator",
    description: "A simple, intuitive calculator app with basic arithmetic functions.",
    image: p5,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/calculator",
    live_demo_link: "https://calculator-demo.com",
    category: "utility",
  },
  {
    name: "Analog Watch",
    description: "A sleek, responsive analog watch with real-time time tracking.",
    image: p6,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/analog-watch",
    live_demo_link: "https://analog-watch-demo.com",
    category: "utility",
  },
  {
    name: "Dynamic Calendar",
    description: "A dynamic, interactive calendar that allows users to add and manage events.",
    image: p7,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/dynamic-calendar",
    live_demo_link: "https://dynamic-calendar-demo.com",
    category: "utility",
  },
  {
    name: "Custom Progress Bar",
    description: "A customizable progress bar with various styles and animations.",
    image: p8,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/custom-progress-bar",
    live_demo_link: "https://custom-progress-bar-demo.com",
    category: "utility",
  },
  {
    name: "Profile Card",
    description: "A clean and simple profile card to showcase personal information.",
    image: p9,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/profile-card",
    live_demo_link: "https://profile-card-demo.com",
    category: "utility",
  },
  {
    name: "QR Code Generator",
    description: "Generate QR codes for any URL or text with an easy-to-use interface.",
    image: p10,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/qr-code-generator",
    live_demo_link: "https://qr-code-generator-demo.com",
    category: "utility",
  },
  {
    name: "Password Generator",
    description: "Generate secure, random passwords with customizable length and complexity.",
    image: p11,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/password-generator",
    live_demo_link: "https://password-generator-demo.com",
    category: "utility",
  },
  {
    name: "Form Validation",
    description: "A form validation tool to ensure user input is correct before submission.",
    image: p12,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/form-validation",
    live_demo_link: "https://form-validation-demo.com",
    category: "utility",
  },
  {
    name: "Sexy NavBar",
    description: "A stylish and responsive navigation bar with smooth transitions and hover effects.",
    image: p13,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/sexy-navbar",
    live_demo_link: "https://sexy-navbar-demo.com",
    category: "UI",
  },
  {
    name: "Advanced Weather App",
    description: "A weather app with live updates and forecasts, using geolocation for personalized weather data.",
    image: p14,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/advanced-weather",
    live_demo_link: "https://advanced-weather-demo.com",
    category: "app",
  },
  {
    name: "Personal Portfolio (Working on)",
    description: "A personal portfolio website showcasing my skills, projects, and experience.",
    image: p15,
    tags: [
      { name: "FP", color: "text-blue-500" },
      { name: "WP", color: "text-green-500" },
      { name: "all", color: "text-gray-500" } // Added "all" tag
    ],
    source_code_link: "https://github.com/yourusername/personal-portfolio",
    live_demo_link: "https://personal-portfolio-demo.com",
    category: "web",
  },
];



// Export all sections as default
export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
