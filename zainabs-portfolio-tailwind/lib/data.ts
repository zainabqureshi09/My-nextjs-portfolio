import React from "react";
import botImg from "@/public/chatbot.png";
import trackerImg from "@/public/tracker.png";
import portfolioImg from "@/public/portfolioweb.png";
import todoImg from "@/public/todo.png";
import quizImg from "@/public/quizweb.png"
import type { ExperienceDataTypes, ProjectDataTypes } from "./types";

export const CVLINK =
  "https://drive.google.com/file/d/1AKnQEJLZoE8GLV3LiDucOzkVd4yGeBRo/view?usp=sharing";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData: ProjectDataTypes[] = [
 
  {
    title: "My Portfolio website",
    description:
      "I am just practicing on HTML5,CSS3 and on typescript fo I make this website.",
    tags: [
      "TypeScript",
      "HTML",
      "CSS",
    ],
    imageUrl: portfolioImg,
    siteUrl: "https://portfolio-website-ztzl.vercel.app/",
    codeUrl: "https://github.com/zainabqureshi09/portfolio-website",
  },

  {
    title: "Practice Chatbot",
    description:
      "This is a chatbot made by me only using HTML, CSS and typescript",
    tags: [
      
      "HTML",
      "CSS",
      "TypeScript",
      
    ],
    imageUrl: botImg,
    siteUrl: "https://chat-bot-one-azure.vercel.app/",
    codeUrl: "https://github.com/zainabqureshi09/chat-bot",
  },
  {
    title: "Expense tracker",
    description:"Take control of your finances with my new expenses tracker! ",
    tags: ["HTML", "CSS", "Typescript"],
    imageUrl: trackerImg,
    siteUrl: "https://expenses-tracker-4h4l.vercel.app/",
    codeUrl: "https://github.com/zainabqureshi09/expenses-tracker",
  },

  {
    title: "Todo web",
    description:"This is self made todo app to enhance my skills check it out..",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: todoImg,
    siteUrl:"https://to-do-web-blush.vercel.app/",
    codeUrl:"https://github.com/zainabqureshi09/To-do-web",
  },
  {
    title: "Quiz Application",
    description:
      "Basically this is a quiz web just made to enhance my skills",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: quizImg,
    siteUrl:"https://html-quiz-application.vercel.app/",
    codeUrl:"https://github.com/zainabqureshi09/html-quiz-application",

  },
] as const;

export const techData = {
  CSS: {
    name: "CSS",
    description: "Cascading Style Sheets",
    url: "https://img.shields.io/badge/-CSS3-2B74B8?style=flat-square&logo=css3&logoColor=white",
    type: "Styling",
  },
  HTML: {
    name: "HTML",
    description: "Hypertext Markup Language",
    url: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
    type: "Frontend",
  },
  JavaScript: {
    name: "JavaScript",
    description:
      "A lightweight, interpreted, or just-in-time compiled programming language with first-class functions.",
    url: "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white",
    type: "Language",
  },
  TypeScript: {
    name: "TypeScript",
    description:
      "Typed superset of JavaScript that compiles to plain JavaScript.",
    url: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
    type: "Language",
  },
 
  Tailwind: {
    name: "Tailwind",
    description: "A utility-first CSS framework",
    url: "https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
    type: "Styling",
  },
 
  React: {
    name: "React",
    description: "A JavaScript library for building user interfaces",
    url: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white",
    type: "Library",
  },
 
  Nextjs: {
    name: "Next.js",
    description: "The React framework for production",
    url: "https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
    type: "Framework",
  },
  
  AWS: {
    name: "AWS",
    description: "Amazon Web Services",
    url: "https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white",
    type: "Backend",
  },
  GitHub: {
    name: "GitHub",
    description: "GitHub is a code hosting platform",
    url: "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white",
    type: "Version Control",
  },
  Git: {
    name: "Git",
    description: "Version control system",
    url: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
    type: "Version Control",
  },
  
} as const;
