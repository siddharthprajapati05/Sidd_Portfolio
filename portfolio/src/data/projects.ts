import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "ims",
    title: "Inventory Management System",
    description:
      "A multi-tenant inventory management system designed for small businesses to track stock in real-time. Features movement-based inventory tracking, secure authentication, and efficient product management with barcode support.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "SQL", "REST APIs", "React.js", "Tailwind CSS"],
    image: "/projects/ims.jpg",
    featured: true,
    githubUrl: "https://github.com/Realadityakumar/IMS_Backend",
    liveUrl: "https://ims.devaditya.me/",
    highlights: [
      {
        icon: "Database",
        label: "Movement-Based Inventory",
        detail: "Tracks stock using stock_movements for accurate and scalable inventory management",
      },
      {
        icon: "Users",
        label: "Multi-Tenant Architecture",
        detail: "Each account represents a separate store with isolated data and admin control",
      },
      {
        icon: "Package",
        label: "Product Management",
        detail: "Supports manual and barcode-based product entry with structured data handling",
      },
      {
        icon: "ShieldCheck",
        label: "Secure Backend",
        detail: "JWT-based authentication with role-based access for admin operations",
      },
    ],
  },
  {
  id: "techwhisper",
  title: "TechWhisper",
  description:
    "TechWhisper is a developer-focused platform built to simplify complex technical concepts into clear, structured explanations. It provides an intuitive interface where users can explore topics, understand core ideas, and learn faster without unnecessary clutter. Designed with a modern frontend architecture, the platform ensures fast performance, scalability, and a smooth user experience.",
  techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  githubUrl: "https://github.com/Realadityakumar/techwhisper",
  liveUrl: "",
  image: "/projects/techwhisper.jpg",
  featured: true,
},
  {
  id: "SecondBrain",
  title: "Second Brain",
  description:
    "A personal knowledge management platform that allows users to save and organize content from YouTube and X (Twitter) in one place. Users can quickly capture links, and the system automatically generates interactive cards for easy viewing and recall. Designed for fast access, structured thinking, and efficient content consumption, the platform focuses on simplicity, performance, and a clean user experience.",
  techStack: ["React", "Node.js", "MongoDB", "Express"],
  liveUrl: "",
  image: "/projects/secondbrain.jpg",
  featured: true,
},
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description:
      "An exciting new project is currently in development. Stay tuned for updates.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description:
      "Another innovative project is on the way. Check back soon.",
    techStack: ["???"],
    image: "/projects/placeholder.jpg",
    featured: false,
    disabled: true,
  },
];
