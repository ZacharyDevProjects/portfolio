interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Pastry Sales Assistant",
    company: "Michocomigateau",
    period: "2024-today",
    description:
      "Customer service and pastry sales, order preparation, cash handling, and maintaining an organized and welcoming shop environment.",
  },
  {
    role: "Assistant Production Logistic",
    company: "Auto-entreprise",
    period: "2024",
    description:
      "Preparation and installation of professional events, technical team coordination, and logistics management.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 reveal">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Experience
          </h2>
        </div>

        <ol
          className="relative list-none"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.07)" }}
        >
          {experiences.map((exp, i) => (
            <li key={i} className="relative pl-10 pb-12 last:pb-0">
              <span
                className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: "#080808",
                  border: "1px solid rgba(129,140,248,0.5)",
                  boxShadow: "0 0 12px rgba(129,140,248,0.2)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "rgba(129,140,248,0.8)" }}
                />
              </span>

              <article
                className="rounded-xl p-6 transition-all duration-300 group"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(129,140,248,0.04)";
                  el.style.borderColor = "rgba(129,140,248,0.15)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(255,255,255,0.025)";
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <p
                      className="text-xs font-medium mb-1"
                      style={{
                        color: "rgba(129,140,248,0.7)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.company}
                    </p>
                    <h3 className="text-base font-semibold leading-snug">
                      {exp.role}
                    </h3>
                  </div>
                  <span
                    className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full mt-0.5"
                    style={{
                      background: "rgba(129,140,248,0.08)",
                      color: "rgba(129,140,248,0.7)",
                      border: "1px solid rgba(129,140,248,0.15)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>
                <div
                  className="mt-3 pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
