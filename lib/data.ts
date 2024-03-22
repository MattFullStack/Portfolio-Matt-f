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
    date: "2023-Present",
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
    title: "Web Development Training",
    location: "OpenClassroom | Remote",
    description:
    "Through rigorous remote training, I developed my coding skills, using HTML/CSS for responsive design and JavaScript for dynamic content creation. My proficiency with Tailwind CSS and Git further enhanced my toolkit, enabling me to craft seamless user experiences across all platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
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
      "• Leveraged React.js to build a seamless, intuitive and interactive frontend experience.",
      
      "• Used Prisma as an ORM to bridge Next.js with MongoDB, facilitating efficient data management and operations for tasks and user profiles.",
      
      "• Ensured the application is fully responsive.",
      
      "• Implemented middleware to handle backend logic, including authentication flows, demonstrating the ability to manage security and user sessions.",
      
      "• Developed comprehensive features like task creation, profile management, and categorization ('Important', 'Completed', 'Do It Now'), showcasing my ability to create a complex and user-friendly application.",
    ].join("<br />"),
    description2:"",
    link:"",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Prisma", "MongoDB", "TypeScript"],
    imageUrl: RoomTask,
    websiteUrl:"https://room-task.vercel.app/"
    
  },
  {
    title: "Weather Live Web App: Integrating Next.js, Shadcn, OpenWeatherMap",
    description: [
      "• Built a dynamic, responsive frontend, leveraging Next.js for performance and SEO benefits.",
      
      "• Integrated OpenWeatherMap and OpenMeteo for real-time weather updates, including temperature, air quality, and forecasts.",
      
      "• Added map functionality for a visual representation of weather conditions.",
      
      "• Implemented middleware to handle backend logic, including authentication flows, demonstrating the ability to manage security and user sessions.",
      
      "• Employed Tailwind CSS for a responsive design, ensuring a consistent UI across devices.",
    ].join("<br />"),
    description2:"",
    link:"",
    tags: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Shadcn", "React Leaflet", "TypeScript"],
    imageUrl: WeatherAppWeb,
    websiteUrl:"https://weather-fullstack-web-app.vercel.app/"
    
  },
  {
    title: "Modern Banking Platform: Responsive Web Design",
    description:[
      "• Leveraged React.js to build a seamless and intuitive frontend experience.",
      
      "• Employed a modular, component-based architecture with React.js, facilitating code reusability and maintainability.",
      
      "• Implemented responsive web design principles using Tailwind CSS.",
      
      "• Leveraged Next.js for server-side rendering, improving the website's search engine optimization and ensuring faster page loads.",

      "• Leveraged Next.js for server-side rendering, improving the website's search engine optimization and ensuring faster page loads.",
    ].join("<br />"),
    description2:"",
    link:"",
    tags: ["React", "Next.js", "Tailwind CSS", "Vite", "TypeScript","JavaScript"],
    imageUrl: corpcommentImg,
    websiteUrl:"https://bank-website-app.vercel.app/"
  },
  {
    title: "University Hub: A Comprehensive Landing Page",
    description:
    [
      "• Used HTML & CSS to build a responsive landing page aligning with modern web standards and practices.",
      
      "• Ensured the landing page is fully responsive, providing an optimal viewing experience across a wide range of devices from desktops to mobile phones.",
      
      "• Leveraged JavaScript to add dynamic animations, enhancing user engagement and interactivity on the page.",
      
      "• Emphasized accessibility, adopting best practices to create a welcoming digital environment for all users, including those with disabilities.",
    ].join("<br />"),
    description2:"",
    link:"",
    tags: ["HTML", "CSS","JavaScript", "Figma"],
    imageUrl: wordanalyticsImg,
    websiteUrl:"https://school-website-app.vercel.app/"
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
  "Vite",
  "Redux",
  "Framer",
  "Stripe",
  "Strapi",
  "Figma",
  "GitHub",
] as const;