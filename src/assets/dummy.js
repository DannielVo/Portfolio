import { assets } from "./assets";
import wepot from "./WePot.png";
import go_game from "./go_game.png";

export const projectsData = [
  {
    id: 1,
    image: assets.readexa,
    title: "Readexa",
    subtitle: "GitHub Profile README Generator",
    description:
      "A web-based tool that helps developers easily create and customize professional GitHub profile READMEs with real-time previews, skill selection, and Markdown export.",
    overview:
      "Readexa is a web-based application designed to simplify the process of creating professional GitHub profile READMEs. Users can customize profile information, select technologies, preview generated Markdown in real time, and export their README without authentication.",
    features: [
      "Interactive profile customization forms",
      "Real-time Markdown preview",
      "Categorized technology and skill selection",
      "Copy-to-clipboard functionality",
      "Downloadable README Markdown file",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://readexa.netlify.app/",
    githubUrl: "https://github.com/DannielVo/Readexa",
  },
  {
    id: 2,
    image: go_game,
    title: "GoMind AI PC",
    subtitle: "Python Go Board Game with AI Opponent",
    description:
      "A Go (Weiqi) board game implemented in Python, featuring player-vs-player and player-vs-AI modes with intelligent move evaluation.",
    overview:
      "GoMind AI PC is a desktop Go game developed with Python and Pygame-ce. It supports Player vs Player and Player vs AI gameplay, implements core Go rules, and features an AI opponent using depth-limited Minimax Search with Alpha-Beta Pruning and heuristic board evaluation.",
    features: [
      "Player vs Player and Player vs AI gameplay",
      "Interactive 9×9 Go board",
      "Stone capture, liberty detection, suicide prevention, and simple Ko rule",
      "Minimax Search with Alpha-Beta Pruning",
      "Heuristic board evaluation and candidate move ordering",
      "Unit testing with Pytest",
    ],
    tech: ["Python", "Pygame-ce", "Pytest"],
    demoUrl: "https://youtu.be/r2gwfIkA1Qw",
    githubUrl: "https://github.com/DannielVo/GoMind_AI_PC",
  },
  {
    id: 3,
    image: wepot,
    title: "WePot",
    subtitle: "Restaurant Chain Management System",
    description:
      "A comprehensive web-based platform for managing multi-branch restaurant operations, featuring QR code ordering, real-time order tracking, kitchen management, and inventory control.",
    overview:
      "WePot is a web-based restaurant management platform designed to support multi-branch operations. The system includes customer QR code ordering, staff order management, kitchen workflows, and inventory management features.",
    features: [
      "Customer QR code ordering",
      "Interactive menu and shopping cart",
      "Staff order management dashboard",
      "Kitchen Display System",
      "Multi-branch restaurant management",
      "Inventory management workflows",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "FastAPI",
    ],
    demoUrl: null,
    githubUrl: null,
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
