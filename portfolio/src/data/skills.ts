import { SkillCategory } from "~/types/data";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Java", icon: `${DI}/java/java-original.svg` },
      { name: "C++", icon: `${DI}/cplusplus/cplusplus-original.svg` },
      // { name: "C", icon: `${DI}/c/c-original.svg` },
      { name: "JavaScript", icon: `${DI}/javascript/javascript-original.svg` },
      // { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Python", icon: `${DI}/python/python-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
      // { name: "PHP", icon: `${DI}/php/php-original.svg` },
      { name: "SQL", icon: `${DI}/mysql/mysql-original.svg` },
    ],
  },
  {
    category: "Web & ML Frameworks",
    skills: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "Node.js", icon: `${DI}/nodejs/nodejs-original.svg` },
      { name: "Tailwind CSS", icon: `${DI}/tailwindcss/tailwindcss-original.svg` },
      { name: "Express", icon: `${SI}/express/white` },
      { name: "TensorFlow", icon: `${DI}/tensorflow/tensorflow-original.svg` },
    { name: "scikit-learn", icon: `${DI}/scikitlearn/scikitlearn-original.svg` },
    { name: "OpenCV", icon: `${DI}/opencv/opencv-original.svg` },
    { name: "MediaPipe", icon: `${SI}/mediapipe/4285F4` },
    { name: "NLP", icon: `${DI}/networkx/networkx-original.svg` }, 
    { name: "Gen AI", icon: `${DI}/illustrator/illustrator-original.svg` },
    { name: "RAG", icon: `${SI}/semanticweb/white` },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${DI}/mongodb/mongodb-original.svg` },
      { name: "MySQL", icon: `${DI}/mysql/mysql-original.svg` },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "n8n", icon: `${SI}/n8n/EA4B71` },
      { name: "AWS", icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg` },
      { name: "Vercel", icon: `${SI}/vercel/white` },
      { name: "Linux", icon: `${DI}/linux/linux-original.svg` },
      { name: "Figma", icon: `${DI}/figma/figma-original.svg` },
      { name: "Cloudflare", icon: `${DI}/cloudflare/cloudflare-original.svg` },
    ],
  },
];
