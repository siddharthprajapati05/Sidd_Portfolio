import { Project } from "~/types/data";

export const projects: Project[] = [
  {
    id: "FRAMS",
    title: "Face Recognition Attendance Management System",
description:
  "An AI-powered attendance system that automates student attendance using real-time face recognition. It captures facial data, trains a model, and marks attendance efficiently with both automatic and manual entry options, integrated with database and CSV export features.",
techStack: ["Python", "OpenCV", "Tkinter", "NumPy", "Pandas", "MySQL", "Computer Vision"],
image: "/projects/face-attendance.jpg",
featured: true,
githubUrl: "https://github.com/siddharthprajapati05/Face_Attendence.git",
// liveUrl: "",
highlights: [
  {
    icon: "Camera",
    label: "Real-Time Face Recognition",
    detail: "Uses OpenCV and LBPH algorithm to detect and recognize faces for automatic attendance marking",
  },
  {
    icon: "Database",
    label: "Dual Storage System",
    detail: "Stores attendance data in both MySQL database and CSV files for flexibility and backup",
  },
  {
    icon: "Waypoints",
    label: "Model Training Pipeline",
    detail: "Captures facial images and trains a machine learning model for accurate identification",
  },
  {
    icon: "SquarePen",
    label: "Manual Attendance Module",
    detail: "Provides GUI-based manual attendance entry with dynamic table creation and CSV export",
  },
  {
    icon: "ShieldCheck",
    label: "Admin Panel",
    detail: "Secure login system to view registered student data and manage attendance records",
    }
    ],
  },
  {
  id: "AI News Research Tool",
  title: "AI News Research Tool",
  description:
    "An AI-powered news research assistant that allows users to extract insights from multiple online articles using Retrieval-Augmented Generation (RAG). It processes URLs, creates vector embeddings, and enables users to ask questions with accurate, context-based answers powered by Google Gemini. Designed for fast, intelligent information retrieval with source transparency.",
  techStack: [
  "Python",
  "Streamlit",
  "LangChain",
  "Google Gemini API",
  "FAISS",
  "HuggingFace Embeddings",
  "RAG (Retrieval-Augmented Generation)"
],
  githubUrl: "https://github.com/siddharthprajapati05/url_scrapper.git",
  liveUrl: "",
  image: "/projects/rockybot.jpg",
  featured: true,
},
  {
  id: "AI Virtual Mouse using Hand Gestures",
  title: "AI Virtual Mouse using Hand Gestures",
  description:
    "An AI-based virtual mouse system that enables users to control the computer cursor using real-time hand gestures. Built with computer vision and hand tracking, it allows cursor movement, clicking, and scrolling without physical hardware, providing a touchless and intuitive human-computer interaction experience.",
  techStack: [
  "Python",
  "OpenCV",
  "MediaPipe",
  "PyAutoGUI",
  "Computer Vision",
  "Gesture Recognition"
],
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
