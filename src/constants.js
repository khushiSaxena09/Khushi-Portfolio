// ✅ SKILLS SECTION LOGOS
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// ✅ PROJECT SECTION LOGOS
import freelanceLogo from './assets/work_logo/freelanceLogo.png';
import faceRecogLogo from './assets/work_logo/faceRecogLogo.png';
import chatAppLogo from './assets/work_logo/chatAppLogo.png';

// ✅ EXPERIENCE SECTION LOGOS (if needed, keep or remove unused)
import webverseLogo from './assets/company_logo/webverse_logo.png'; // Optional
import agcLogo from './assets/company_logo/agc_logo.png'; // Optional
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png'; // Optional

// ✅ EDUCATION SECTION LOGOS
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';


// ✅ FINAL SKILLS DATA
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];


// ✅ FINAL EXPERIENCE DATA
export const experiences = [
  {
    id: 0,
    role: "Python Developer Intern",
    company: "EISystems and Technologies",
    date: "June 2023 - Aug 2023",
    desc: "Completed hands-on Python training and implemented multiple mini-projects, including an OTP generator to enhance authentication and automation scripts for processing user input and generating dynamic outputs efficiently.",
    skills: ["Python", "Automation", "Problem Solving"],
  },
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Ensino Research and Development Pvt. Ltd.",
    date: "June 2024 - Aug 2024",
    desc: "Built and deployed a full-stack chat application using React.js. Developed responsive web interfaces, increasing user engagement through modern UI/UX practices, and collaborated on multiple projects to reduce feature deployment time.",
    skills: ["React.js", "JavaScript", "Node.js", "UI/UX", "HTML", "CSS"],
  },
];


// ✅ FINAL EDUCATION DATA
export const education = [
  {
    id: 0,
    school: "Teerthanker Mahaveer University, Moradabad",
    date: "Sep 2021 - June 2025",
    grade: "8.1 CGPA",
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
    desc: "Pursuing B.Tech in Computer Science Engineering with a focus on full-stack development, automation, and real-time projects. Key coursework includes Data Structures, Algorithms, Web Development, and Python Programming. Worked on projects like a Face Recognition Attendance System and a Freelance Marketplace Web App.",
  },
  {
    id: 1,
    school: "Gandhi Nagar Public School, Moradabad",
    date: "Apr 2020 - March 2021",
    grade: "73%",
    degree: "CBSE(XII) - PCM (Physics, Chemistry, Mathematics)",
    desc: "Completed Class 12 under CBSE Board with PCM stream. Built a strong foundation in math and science, preparing for an engineering degree.",
  },
  {
    id: 2,
    school: "Gandhi Nagar Public School, Moradabad",
    date: "Apr 2018 - March 2019",
    grade: "89%",
    degree: "CBSE(X) - Science with Computer Applications",
    desc: "Completed Class 10 under CBSE Board with a strong focus on science and computer fundamentals, achieving 89% overall.",
  },
];


// ✅ FINAL PROJECTS DATA
export const projects = [
  {
    id: 0,
    title: "Freelance Marketplace Web Application",
    description:
      "A secure, full-stack freelance marketplace where clients and freelancers connect, post projects, make payments via Stripe, and communicate through a real-time chat feature. Built with React, Node.js, MongoDB, and JWT authentication.",
    image: freelanceLogo,
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Stripe API"],
    github: "https://github.com/khushiSaxena09/Freelance_Market_Place",
    webapp: "", // Add deploy link if live
  },
  {
    id: 1,
    title: "CHAT AI",
    description:
      "A real-time AI chat application built using React, Express, MongoDB, and Google Gemini. The system provides an interactive interface, processes user queries through Gemini’s language model, and delivers smart, context-aware responses to automate conversations and enhance user engagement.",
    image: "",
    tags: ["React", "Express", "MongoDB", "Google Gemini AI", "NLP", "Automation"],
    github: "",
    webapp: "", // Local project, so skip
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description:
      "A responsive chat application built during my internship at Ensino Research & Development. Uses React.js and Firebase to enable real-time messaging between multiple users with secure authentication and modern UI.",
    image: chatAppLogo,
    tags: ["React.js", "Firebase", "JavaScript", "CSS"],
    github: "https://github.com/khushiSaxena09/Chatify",
    webapp: "https://chatify-gs.web.app/",
  },
];
