import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Travel from "@/public/Travel.png";
import RoomTask from "@/public/RoomTask.png";
import WeatherAppWeb from "@/public/WeatherAppWeb.png"
import Website3 from "@/public/Website3.png"
import Website4 from "@/public/Website4.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Self-Directed Learning | Fullstatck Development",
    location: "Remote",
    description:[
      "With a passion for continuous growth and innovation, I’ve undertaken a self-directed learning journey in full stack development.", " Leveraging the power of React.js and Next.js, I've crafted responsive web applications and delved into the intricacies of front-end and back-end integration. This exploration has enhanced my skills in utilizing databases and ensuring seamless data flow with tools like MongoDB and Prisma.", ],
      icon: React.createElement(FaReact),
    date: "2024-Present",
  },
  {
    title: "Intensive Web Development Bootcamp (RNCP level 6)",
    location: "Ironhack France | Paris, France",
    description:
    "Through an intensive bootcamp at Ironhack France, I have solidified my foundation in web development, mastering HTML and CSS for structured, stylish web pages, and Git for project management. My journey continued with JavaScript, enhancing interactivity and responsiveness in my designs. As I progressed, I integrated sophisticated backend technologies with React, NodeJS, and ExpressJS, embracing the complexities of full-stack development. This bootcamp has been pivotal in honing my abilities to construct single-page applications and manage database interactions with MongoDB, all contributing to my growth as a versatile web developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Intensive Programming Bootcamp (Piscine 42)",
    location: "42 School | Paris, France",
    description:
      "Piscine 42 is where I kept developing my coding skills, particularly with C and C++, in a high-intensity learning environment.I collaborated on complex projects, honing skills in code efficiency, algorithmic thinking, and teamwork under high-pressure scenarios. ",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Bachelor of Sound Engineering",
    location: "SAE Institute | Paris, France",
    description:
      "During my bachelor's degree in sound engineering, I immersed myself in sound theory and audio signal processing. This hands-on experience in audio production, not only refined my attention to detail, but also enriched my approach to coding. This brings a unique perspective to each development project I build, allowing me to solve problems with creativity and precision.",
      icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Task Management Web App: Integrating Next.js, Prisma and MongoDB",
    description: [
      "<strong>Overview:</strong> A task management platform designed to streamline productivity and enhance user experience through a responsive, feature-rich interface."
    ].join("<br />"),
    description2:[
      "<strong>Key Features:</strong>",
    ].join("<br />"),
    description3:[
      "-> Intuitive UI: Crafted with React.js for dynamic and interactive user interactions.",
      "-> Robust Data Handling: Integrated Next.js with MongoDB using Prisma ORM for seamless task and profile management.",
      "-> Responsive Design: Adaptability across devices, ensuring a consistent user experience.",
      "-> Secure Backend: Custom middleware for secure authentication and session management.",
      "-> Advanced Task Features: Task prioritization, and personal profile customization for user-centric navigation.",
    ].join("<br />"),
    link:"",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Prisma", "MongoDB", "TypeScript"],
    imageUrl: RoomTask,
    websiteUrl:"https://room-task.vercel.app/",
    websiteUrl2:"https://github.com/MattFullStack/Task-Management-Web-App-Integrating-Next.js-Prisma-and-MongoDB",
    
  },
  {
    title: "Weather Live Web App: Integrating Next.js, Shadcn, OpenWeatherMap",
    description: [
      "<strong>Overview:</strong> A real-time weather tracking application delivering accurate forecasts and environmental conditions, optimized for performance and user engagement."
    ].join("<br />"),
    description2: [
      "<strong>Key Features:</strong>"
    ].join("<br />"),
    description3: [
      "-> Dynamic Frontend: Developed with Next.js for enhanced performance, featuring a responsive layout.",
      "-> Live Weather Data: Integration with OpenWeatherMap and OpenMeteo for real-time updates on weather conditions, including temperature, air quality, and detailed forecasts.",
      "-> Interactive Maps: Visual representation of weather data through comprehensive map functionality, enriching user experience.",
      "-> Secure Backend: Utilized middleware for robust backend logic handling, including user authentication and session management, ensuring security and privacy.",
      "-> Tailwind CSS: Employed for sleek, responsive design, maintaining UI consistency across various devices and screen sizes.",
    ].join("<br />"),  
    link:"",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Shadcn", "TypeScript"],
    imageUrl: WeatherAppWeb,
    websiteUrl:"https://weather-fullstack-web-app.vercel.app/",
    websiteUrl2:"https://github.com/MattFullStack/Weather-Fullstack-Web-App",
    
  },
  {
    title: "Apple iPhone 15 Pro Website Recreation: GSAP and Three.js Integration",
    description: [
      "<strong>Overview:</strong> A high-fidelity recreation of Apple's iPhone 15 Pro website, showcasing advanced web animations and 3D rendering to mimic the original's interactive experience."
    ].join("<br />"),
    description2: [
      "<strong>Key Features:</strong>"
    ].join("<br />"),
    description3: [
      "-> Dynamic Frontend: Developed with Next.js for enhanced performance, featuring a responsive layout.",
      "-> GSAP-Enhanced Animations: Smooth and subtle animation effects that captivate and engage, delivering a seamless user experience.",
      "-> Three.js 3D Effects: Interactive 3D renderings of the iPhone 15 Pro, allowing users to explore the product in a variety of colors and sizes.",
      "-> Custom GSAP Video Carousel: An innovative carousel feature that enhances the browsing experience with dynamic, user-focused interactivity.",
      "-> Fully Responsive Design: A flexible layout that ensures an optimal viewing experience across all devices and screen sizes.",
    ].join("<br />"),  
    link:"",
    tags: ["React", "Next.js", "Tailwind CSS", "Vite", "Three.js", "GSAP"],
    imageUrl: Website3,
    websiteUrl:"https://apple-iphone-landing-page.vercel.app/",
    websiteUrl2:"https://github.com/MattFullStack/iPhone-Landing-Page",
  },
  {
    title: "AI Chatbot Solution Landing Page",
    description: [
      "<strong>Overview:</strong> Built a compelling and responsive landing page for an AI Chatbot solution, leveraging React.js and Tailwind CSS to showcase the product’s features through a seamless, modern user interface."
    ].join("<br />"),
    description2: [
      "<strong>Key Features:</strong>"
    ].join("<br />"),
    description3: [
      "-> Dynamic Frontend: Utilized React.js to create a vibrant and interactive landing page that responds intuitively to user interactions, highlighting the efficiency and sophistication of the AI Chatbot.",
      "-> Parallax Animations: Engaging animations that bring the static page to life, making the user experience more immersive as they learn about the chatbot's capabilities.",
      "-> Complex UI Geometry: Advanced design techniques with Tailwind CSS, showcasing circular feature displays and geometric grid patterns.",
      "-> Modern UI Elements: Adopted contemporary design trends to ensure the landing page stands out with a fresh, intuitive feel that captures user interest immediately.",
      "-> Fully Responsive Design: A flexible layout that ensures an optimal viewing experience across all devices and screen sizes.",
    ].join("<br />"),
    link:"",
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    imageUrl: Website4,
    websiteUrl:"https://ai-chatbot-solution-online-landing-page.vercel.app/",
    websiteUrl2:"https://github.com/MattFullStack/AI-Chatbot-Solution-Online-Landing-Page",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Prisma",
  "Docker",
  "Vite",
  "Redux",
  "Framer",
  "Stripe",
  "Strapi",
  "Figma",
  "GitHub",
  "Three.js",
  "GSAP",
  "Shadcn",
] as const;