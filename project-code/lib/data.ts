import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import faceRecImg from "@/public/video-face-rec.jpeg";
import creditCardFraudImg from "@/public/credit-card-fraud-detection.png";
import wanderlyImg from "@/public/wanderly-website.png";
import docuQueryImg from "@/public/document-query-ai.png";


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
    title: "Software Developer Intern",
    location: " - Amazon",
    description:
      "Developed a guided onboarding platform for Amazon’s internal businesses, cutting onboarding time from 8 weeks to 4 hours. Automated business profile setup with AWS Lambda and DynamoDB, eliminating 98% of manual effort, and built UI integration testing with Paystation APIs that enabled 3x faster validation and reduced misconfigurations.",
    icon: React.createElement(CgWorkAlt), // Graduation cap icon
    date: "May 2025 - August 2025",
  },
  {
    title: "M.S. in Computer Science",
    location: " - ASU",
    description:
      "Pursuing a Master's in Computer Science with a focus on distributed systems and machine learning. GPA: 3.94/4.",
    icon: React.createElement(LuGraduationCap), // Graduation cap icon
    date: "Jan 2024 - Dec 2025 (Expected)",
  },
  {
    title: "Software Developer",
    location: " - RaftLabs",
    description:
      "At RaftLabs, I designed and implemented scalable, distributed systems for real-time data ingestion and API integrations. By optimizing caching strategies and rate-limiting, I enhanced system reliability under peak loads, while creating SQL-powered dashboards that enabled data-driven decisions across platforms.",
    icon: React.createElement(CgWorkAlt), // Work icon
    date: "Jan 2023 - Nov 2023",
  },
  {
    title: "Software Developer Intern",
    location: " - TatvaSoft",
    description:
      "At TatvaSoft, I architected scalable, serverless solutions leveraging AWS services like S3 and DynamoDB to support high-performance applications. I designed distributed systems with role-based access control and optimized APIs using GraphQL, enhancing efficiency and scalability for secure, real-time operations.",
    icon: React.createElement(CgWorkAlt), // Work icon
    date: "Jun 2022 - Jul 2022",
  },
  {
    title: "B.E. in Computer Engineering",
    location: " - GTU",
    description: "Graduated with an 8.79/10 GPA. Gained foundational knowledge in software development.",
    icon: React.createElement(LuGraduationCap), // Graduation cap icon
    date: "Jul 2019 - Jun 2023",
  },
] as const;


export const projectsData = [
  {
    index: 1,
    title: "AWS Video FaceRec",
    description:
      "The Video Face Recognition system uses FFmpeg to extract frames and NLP ResNet for face detection, enabling easy face recognition from video inputs.",
    tags: ["Python", "React.js", "AWS S3", "Tailwind", "AWS Lambda", "SQS"],
    imageUrl: faceRecImg,
    githubUrl: 'https://github.com/mannvora/VisionFace-Recognition-Service'
  },
  {
    index: 2,
    title: "DocuQuery AI",
    description:
      "DocuQuery simplifies intelligent Q&A from documents. Upload PDFs, TXT files, or URLs, and get answers seamlessly based on the content.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: docuQueryImg,
    githubUrl: 'https://github.com/mannvora/DocuQuery-AI'
  },
  {
    index: 3,
    title: "Credit Card Fraud Detection",
    description:
      "The Credit Card Fraud Detection system uses machine learning to analyze transactions and identify potential fraud in real-time.",
    tags: ["PyTorch", "Numpy", "Pandas", "Matplotlib", "SKLearn"],
    imageUrl: creditCardFraudImg,
    githubUrl: 'https://github.com/mannvora/ML-Codes/blob/main/SML-575-Credit-Card-Fraud-Detection%20(1).ipynb'
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
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL", 
  "Python",
  "Django",
  "Framer Motion",
  "C++",
  "Java",
  "SQL",
  "Matplotlib",
  "Pandas",
  "Numpy",
  "AWS DynamoDB",
  "Docker",
  "Kubernetes",
  "Terraform",
  "CloudFormation",
  "Github",
  "AWS CloudWatch"
] as const;