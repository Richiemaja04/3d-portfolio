import { ReactNode } from "react";
import { SiPython, SiFlask, SiReact, SiTensorflow, SiPostgresql, SiDocker } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode;
  github?: string;
  live: string;
};

const PROJECT_SKILLS = {
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  flask: { title: "Flask", bg: "black", fg: "white", icon: <SiFlask /> },
  react: { title: "React", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  tensorflow: { title: "TensorFlow", bg: "black", fg: "white", icon: <SiTensorflow /> },
  postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
  docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
};

const projects: Project[] = [
  {
    id: "ai-resume",
    category: "AI Application",
    title: "AI Resume Optimizer",
    src: "/assets/projects/ai-resume.png",
    screenshots: [],
    live: "",
    github: "https://github.com/Richiemaja04/AI-Resume-Optimizer",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask],
    },
    content: (
      <div className="space-y-4 font-mono">
        <p>
          AI-powered resume analyzer that evaluates resumes against job descriptions
          using NLP techniques and intelligent keyword extraction.
        </p>
        <ul className="list-disc ml-6">
          <li>Extracts missing skills and optimization suggestions</li>
          <li>Improves ATS compatibility</li>
          <li>Uses Gemini/OpenAI API for intelligent rewriting</li>
        </ul>
      </div>
    ),
  },

  {
    id: "behavior-auth",
    category: "Cybersecurity + ML",
    title: "Behavior-Based Authentication System",
    src: "/assets/projects/behavior-auth.png",
    screenshots: [],
    live: "",
    github: "https://github.com/Richiemaja04/Behavior-Based-Authentication",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.tensorflow],
    },
    content: (
      <div className="space-y-4 font-mono">
        <p>
          A GRU-based machine learning system that authenticates users based on
          behavioral typing patterns instead of traditional passwords.
        </p>
        <ul className="list-disc ml-6">
          <li>Sequence modeling using GRU</li>
          <li>Anomaly detection for security enhancement</li>
          <li>Prevents credential theft attacks</li>
        </ul>
      </div>
    ),
  },

  {
    id: "medical-assistant",
    category: "AI Healthcare",
    title: "AI Medical Assistant",
    src: "/assets/projects/medical-assistant.png",
    screenshots: [],
    live: "",
    github: "https://github.com/Richiemaja04/AI-Medical-Assistant",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    content: (
      <div className="space-y-4 font-mono">
        <p>
          AI-driven healthcare assistant supporting voice and chat-based interactions
          for elderly users.
        </p>
        <ul className="list-disc ml-6">
          <li>Voice-to-text interaction</li>
          <li>Medication & appointment reminders</li>
          <li>Vector-based knowledge retrieval</li>
        </ul>
      </div>
    ),
  },

  {
    id: "billing-system",
    category: "Business Software",
    title: "Standalone Billing System",
    src: "/assets/projects/billing.png",
    screenshots: [],
    live: "",
    github: "https://github.com/Richiemaja04/Billing-System",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    },
    content: (
      <div className="space-y-4 font-mono">
        <p>
          Desktop billing software with GUI interface for invoice and
          transaction management.
        </p>
        <ul className="list-disc ml-6">
          <li>Invoice generation & Excel export</li>
          <li>SQLite/PostgreSQL integration</li>
          <li>Search & update record functionality</li>
        </ul>
      </div>
    ),
  },

  {
    id: "drowsiness-detection",
    category: "Computer Vision",
    title: "EAR Drowsiness Detection",
    src: "/assets/projects/drowsiness.png",
    screenshots: [],
    live: "",
    github: "https://github.com/Richiemaja04/EAR-Drowsiness-Detection",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    content: (
      <div className="space-y-4 font-mono">
        <p>
          Real-time driver fatigue detection using Eye Aspect Ratio (EAR)
          computed from facial landmarks.
        </p>
        <ul className="list-disc ml-6">
          <li>OpenCV-based facial detection</li>
          <li>Live alert system when drowsiness detected</li>
          <li>Improves road safety applications</li>
        </ul>
      </div>
    ),
  },

  {
    id: "asr-system",
    category: "Speech Recognition",
    title: "ASR Speech-to-Text Translator",
    src: "/assets/projects/asr.png",
    screenshots: [],
    live: "",
    github: "https://github.com/Richiemaja04/ASR-Speech-to-text-Translator",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python],
    },
    content: (
      <div className="space-y-4 font-mono">
        <p>
          Automatic Speech Recognition system converting spoken input into text
          for accessibility and transcription applications.
        </p>
        <ul className="list-disc ml-6">
          <li>Speech-to-text pipeline</li>
          <li>Noise reduction preprocessing</li>
          <li>Real-time text output</li>
        </ul>
      </div>
    ),
  },
];

export default projects;