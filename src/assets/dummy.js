import chat_app from "./chat_app.png";
import dashboard from "./dashboard.png";
import go_game from "./go_game.png";

export const projectsData = [
  {
    id: 1,
    image: chat_app,
    title: "Thunder",
    description:
      "A real-time chat application supporting private and group messaging, built with WebSocket for instant message delivery and smooth communication experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSocket"],
  },
  {
    id: 2,
    image: dashboard,
    title: "InsightX",
    description:
      "A modern SaaS-style dashboard focusing on clean UI, responsive layouts, and dynamic data visualization to deliver clear and actionable insights.",
    tech: ["Vite", "React.js", "Tailwind CSS"],
  },
  {
    id: 3,
    image: go_game,
    title: "Go Game",
    description:
      "A Go (Weiqi) board game implemented in Python, featuring player-vs-player and player-vs-AI modes with intelligent move evaluation.",
    tech: ["Python", "PyGame"],
  },
];
