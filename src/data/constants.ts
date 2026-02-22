// =======================
// SKILLS
// =======================

export enum SkillNames {
  PYTHON = "python",
  JAVA = "java",
  JS = "js",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  FLASK = "flask",
  DJANGO = "django",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  MYSQL = "mysql",
  FIREBASE = "firebase",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  GIT = "git",
  TENSORFLOW = "tensorflow",
  NLP = "nlp",
  BERT = "bert",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "AI systems, backend services & automation.",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.JAVA]: {
    id: 2,
    name: "java",
    label: "Java",
    shortDescription: "Object-oriented backend systems.",
    color: "#f89820",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },

  [SkillNames.JS]: {
    id: 3,
    name: "js",
    label: "JavaScript",
    shortDescription: "Core web development language.",
    color: "#f7df1e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 4,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript for scalable apps.",
    color: "#3178c6",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-driven UI development.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Production-ready full-stack framework.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "TailwindCSS",
    shortDescription: "Utility-first modern CSS framework.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "High-performance backend runtime.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.FLASK]: {
    id: 9,
    name: "flask",
    label: "Flask",
    shortDescription: "Lightweight Python backend.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },

  [SkillNames.DJANGO]: {
    id: 10,
    name: "django",
    label: "Django",
    shortDescription: "Full-featured Python framework.",
    color: "#092E20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Advanced relational database.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL flexible data modeling.",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.MYSQL]: {
    id: 13,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Structured relational database.",
    color: "#4479A1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 14,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Backend-as-a-Service platform.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  [SkillNames.DOCKER]: {
    id: 15,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerized deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.KUBERNETES]: {
    id: 16,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Container orchestration.",
    color: "#326ce5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },

  [SkillNames.NGINX]: {
    id: 17,
    name: "nginx",
    label: "Nginx",
    shortDescription: "High-performance web server.",
    color: "#009639",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },

  [SkillNames.AWS]: {
    id: 18,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure & deployments.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },

  [SkillNames.GCP]: {
    id: 19,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud AI & scalable systems.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },

  [SkillNames.GIT]: {
    id: 20,
    name: "git",
    label: "Git",
    shortDescription: "Version control & collaboration.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.TENSORFLOW]: {
    id: 21,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Deep learning framework.",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },

  [SkillNames.NLP]: {
    id: 22,
    name: "nlp",
    label: "NLP & ML",
    shortDescription: "Applied NLP & anomaly detection.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },

  [SkillNames.BERT]: {
    id: 23,
    name: "bert",
    label: "BERT & Transformers",
    shortDescription: "Transformer-based NLP models.",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
};

// =======================
// EXPERIENCE
// =======================

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "Present",
    title: "AI & Full Stack Developer",
    company: "Personal & Academic Projects",
    description: [
      "Built Behavior-Based Authentication system using GRU and anomaly detection.",
      "Developed AI Resume Optimizer using Gemini API and NLP pipelines.",
      "Engineered AI Medical Assistant with vector stores and voice interaction.",
      "Designed scalable REST APIs and real-time WebSocket systems.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.FLASK,
      SkillNames.REACT,
      SkillNames.NLP,
      SkillNames.TENSORFLOW,
      SkillNames.POSTGRES,
    ],
  },
];

// =======================
// THEME DISCLAIMERS
// =======================

export const themeDisclaimers = {
  light: [
    "Light mode activated. Clean, minimal, distraction-free.",
    "Optimized brightness for clarity and focus.",
  ],
  dark: [
    "Dark mode activated. Built for developers.",
    "Low light. High focus. Maximum productivity.",
  ],
};