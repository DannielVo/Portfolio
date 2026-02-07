import { assets } from "./assets";
import chat_app from "./chat_app.png";
import dashboard from "./dashboard.png";
import go_game from "./go_game.png";

export const projectsData = [
  {
    id: 1,
    image: chat_app,
    title: "Flashup",
    description:
      "A real-time chat application supporting private and group messaging, built with WebSocket for instant message delivery and smooth communication experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket"],
    demoUrl: null,
  },
  {
    id: 2,
    image: dashboard,
    title: "InsightX",
    description:
      "A modern SaaS-style dashboard focusing on clean UI, responsive layouts, and dynamic data visualization to deliver clear and actionable insights.",
    tech: ["Vite", "React.js", "Tailwind CSS"],
    demoUrl: null,
  },
  {
    id: 3,
    image: go_game,
    title: "Go Game",
    description:
      "A Go (Weiqi) board game implemented in Python, featuring player-vs-player and player-vs-AI modes with intelligent move evaluation.",
    tech: ["Python", "Pygame-ce", "Pillow"],
    demoUrl: "https://youtu.be/tzBjR_J5kqM?si=Gd--zbCKxSSr_DdJ",
  },
];

export const techStack = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", logo: assets.html_logo },
      { name: "CSS", logo: assets.css_logo },
      { name: "JavaScript", logo: assets.javascript_logo },
      { name: "TypeScript", logo: assets.typescript_logo },
      { name: "React", logo: assets.react_logo },
      { name: "Tailwind CSS", logo: assets.tailwind_logo },
      { name: "Bootstrap", logo: assets.bootstrap_logo },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", logo: assets.nodejs_logo },
      { name: "Express.js", logo: assets.express_logo },
      { name: "FastAPI", logo: assets.fastapi_logo },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", logo: assets.postgres_logo },
      { name: "MongoDB", logo: assets.mongodb_logo },
    ],
  },
];
