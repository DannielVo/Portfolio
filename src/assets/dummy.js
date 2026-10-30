import { assets } from "./assets";
import dashboard from "./dashboard.png";
import go_game from "./go_game.png";

export const projectsData = [
  {
    id: 1,
    image: assets.readexa,
    title: "Readexa",
    description:
      "A web-based tool that helps developers easily create and customize professional GitHub profile READMEs with real-time previews, skill selection, and Markdown export.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://readexa.netlify.app/",
  },
  {
    id: 2,
    image: go_game,
    title: "Go Game",
    description:
      "A Go (Weiqi) board game implemented in Python, featuring player-vs-player and player-vs-AI modes with intelligent move evaluation.",
    tech: ["Python", "Pygame-ce", "Pillow"],
    demoUrl: "https://youtu.be/tzBjR_J5kqM?si=Gd--zbCKxSSr_DdJ",
  },
  {
    id: 3,
    image: dashboard,
    title: "WePot",
    description:
      "A comprehensive web-based platform for managing multi-branch restaurant operations, featuring QR code ordering, real-time order tracking, kitchen management, and inventory control using the FEFO method. The system also integrates AI-powered smart discounts and demand forecasting to optimize inventory and reduce food waste.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "FastAPI",
    ],
    demoUrl: null,
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
