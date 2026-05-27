import { useState, useRef, useEffect } from "react";
import chatroom from "../../../assets/chat_room.png";
import nextbuyImg from "../../../assets/nextbuy.png";
import etodo from "../../../assets/etodo.png";

interface Project {
  label: string;
  title: string;
  tagline: string;
  description: string;
  role: string | null;
  objective: string;
  learning: string;
  tags: string[];
  github: string;
  demo: string | null;
  accent: string;
  image: string;
  colors: [string, string];
}

const RADIUS = 300;

const projects: Project[] = [
  {
    label: "Project 01",
    title: "eTodo",
    tagline:
      "A task management application built around productivity and collaboration.",
    description:
      "Backend-focused project developed at Epitech. Built and connected the backend architecture for task management and user authentication.",
    role: "Backend developer — created APIs, managed database structure and connected frontend requests to backend services.",
    objective:
      "Deliver a functional and reliable backend while coordinating API communication with the frontend team.",
    learning:
      "Learned how backend architecture, database structure and API consistency directly impact the overall application experience.",
    tags: ["Node.js", "Express.js", "MySQL", "REST API", "JWT"],
    github: "https://github.com/ZacharyDevProjects/etodo",
    demo: null,
    accent: "text-cyan-400",
    image: etodo,
    colors: ["rgba(59, 130, 246, 0.15)", "rgba(34, 197, 94, 0.15)"],
  },
  {
    label: "Project 02",
    title: "Next Buy",
    tagline:
      "A data analysis project focused on purchase prediction and customer insights.",
    description:
      "Data-driven project built around CSV analysis, data visualization and predictive modeling to anticipate future customer purchases.",
    role: "Data developer — processed CSV datasets, generated graphs, highlighted key insights and contributed to the prediction model.",
    objective:
      "Analyze customer purchase behavior and build a model capable of predicting future purchases from historical data.",
    learning:
      "Learned how data cleaning, visualization and model accuracy all play a major role in making useful predictions from real datasets.",
    tags: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Data Analysis",
      "Matplotlib",
      "CSV",
    ],
    github: "https://github.com/ZacharyDevProjects/nextbuy",
    demo: null,
    accent: "text-emerald-400",
    image: nextbuyImg,
    colors: ["rgba(16, 185, 129, 0.15)", "rgba(59, 130, 246, 0.15)"],
  },
  {
    label: "Project 03",
    title: "Chat Room Application",
    tagline:
      "A real-time chat application with secure authentication and live messaging.",
    description:
      "Real-time chat application featuring JWT authentication, cookie-based sessions and live communication through WebSockets.",
    role: "Backend developer — implemented authentication, session handling, database integration and real-time messaging features.",
    objective:
      "Build a secure and responsive chat system allowing authenticated users to exchange messages in real time.",
    learning:
      "Learned how authentication, session management and WebSockets work together to create reliable real-time applications.",
    tags: ["FastAPI", "PostgreSQL", "JWT", "WebSocket", "Python", "Cookies"],
    github: "https://github.com/ZacharyDevProjects/chat-room-app",
    demo: null,
    accent: "text-sky-400",
    image: chatroom,
    colors: ["rgba(14, 165, 233, 0.15)", "rgba(99, 102, 241, 0.15)"],
  },
];

export const inputClass =
  "w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] text-white rounded text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors";

function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const snapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigate = (next: number) => {
    if (next === activeIdx) return;
    if (snapTimerRef.current) clearTimeout(snapTimerRef.current);

    const targetBase = -next * 120;
    const k = Math.round((angleRef.current - targetBase) / 360);
    const targetAngle = targetBase + 360 * k;
    angleRef.current = targetAngle;

    if (carouselRef.current) {
      carouselRef.current.style.transition =
        "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      carouselRef.current.style.transform = `rotateY(${targetAngle}deg)`;
    }

    setFading(true);
    setTimeout(() => {
      setActiveIdx(next);
      setFading(false);
    }, 160);
  };

  const prev = () =>
    navigate((activeIdx - 1 + projects.length) % projects.length);
  const next = () => navigate((activeIdx + 1) % projects.length);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);

      angleRef.current -= e.deltaY * 0.3;

      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }

      snapTimerRef.current = setTimeout(() => {
        const snapped = Math.round(angleRef.current / 120) * 120;
        angleRef.current = snapped;

        if (carouselRef.current) {
          carouselRef.current.style.transition =
            "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          carouselRef.current.style.transform = `rotateY(${snapped}deg)`;
        }

        const normalizedAngle = ((-snapped % 360) + 360) % 360;
        const newIdx = Math.round(normalizedAngle / 120) % 3;

        setFading(true);
        setTimeout(() => {
          setActiveIdx(newIdx);
          setFading(false);
        }, 160);
      }, 250);
    };

    wrapper.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      wrapper.removeEventListener("wheel", onWheel);
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current);
    };
  }, []);

  const p = projects[activeIdx];

  return (
    <section
      id="projects"
      className="py-20 reveal"
      style={{
        background: `radial-gradient(circle at center, ${p.colors[0]} 0%, ${p.colors[1]} 100%)`,
        transition: "background 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-14">
          <div>
            <div
              className="section-divider"
              style={{ margin: "0 0 0.75rem 0" }}
            />
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Projects
            </h2>
          </div>
          <span className="text-zinc-700 text-sm tabular-nums">
            {String(activeIdx + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start transition-opacity duration-150 ${fading ? "opacity-0" : "opacity-100"}`}
        >
          <div>
            <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-3">
              {p.label}
            </span>
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              {p.tagline}
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8 text-sm">
              {p.description}
            </p>

            {p.role && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
                  My role
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {p.role}
                </p>
              </div>
            )}

            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
                Objective
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {p.objective}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
                Result / learning
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {p.learning}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full text-zinc-500"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-sm"
              >
                GitHub
              </a>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm"
                >
                  Live demo
                </a>
              )}
            </div>
          </div>

          <div
            ref={wrapperRef}
            className="relative flex items-center justify-center select-none"
            style={{
              perspective: "1100px",
              height: "480px",
            }}
          >
            <div
              ref={carouselRef}
              style={{
                transformStyle: "preserve-3d",
                width: "420px",
                height: "270px",
                position: "relative",
              }}
            >
              {projects.map((proj, i) => (
                <div
                  key={proj.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    transform: `rotateY(${i * 120}deg) translateZ(${RADIUS}px)`,
                    backfaceVisibility: "hidden",
                  }}
                  className="rounded-xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <span
              className={`absolute bottom-0 text-xs tracking-widest pointer-events-none ${p.accent} opacity-50`}
            >
              scroll to explore
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-10 h-10 rounded-full border border-[#333] text-white text-lg hover:border-white transition-colors"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="w-10 h-10 rounded-full border border-[#333] text-white text-lg hover:border-white transition-colors"
          >
            →
          </button>
          <div className="flex gap-2 ml-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIdx ? "bg-white" : "bg-[#333] hover:bg-zinc-500"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
