interface LearningEntry {
  period: string
  title: string
  body: string
  tags: string[]
}

const entries: LearningEntry[] = [
  {
    period: '2024',
    title: 'Sales & Customer Interaction',
    body: 'Working at Michocomigateau as a pastry sales assistant showed me a very different side of operational work: direct customer interaction. It was about speed, accuracy, and maintaining a clean and welcoming space while handling orders and payments. Unlike logistics or backstage event work, here everything is visible and immediate — customer satisfaction depends on every small detail. It strengthened my discipline, my attention to consistency, and my ability to stay efficient during peak rush moments.',
    tags: ['Customer service', 'Sales', 'Responsibility', 'Efficiency', 'Attention to detail'],
  },
  {
    period: '2024',
    title: 'Independent Work (Auto-entreprise)',
    body: 'Working under auto-entrepreneur status pushed me to handle projects end-to-end, from finding clients to delivering services and managing invoicing. It forced me to be autonomous, organized, and accountable for everything without external structure. I learned how to manage time, expectations, and communication in a professional context where I was fully responsible for outcomes.',
    tags: ['Autonomy', 'Freelance', 'Organization', 'Client management', 'Responsibility'],
  },
  {
    period: 'Nov 2025 – Jan 2026',
    title: 'Web & Front-End Development',
    body: 'HTML and CSS came pretty fast, but React actually made me rethink how I build things. Components, state, render cycles — it’s not intuitive at first. Building this portfolio was different from exercises: I had something real to ship, actual design choices to defend, and code that had to not just work but feel good. That obsession with details from running events kept me honest here.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    period: 'Feb – May 2026',
    title: 'Data, ML & Cybersecurity',
    body: 'Working on NextBuy and NLP projects made it clear that data is only useful when it connects to real decisions. Building models for the sake of it is pointless if it doesn’t solve a concrete need. At the same time, exploring CTF challenges and CVE analyses shifted how I approach development: I now think in terms of attack surfaces, input validation, and trust boundaries from the start, not after deployment.',
    tags: ['Python', 'Machine Learning', 'NLP', 'CTF', 'OWASP', 'Security mindset'],
  },
];
function Learning() {
  return (
    <section id="learning" className="py-20 reveal">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider" />
          <h2 className="text-3xl font-bold mb-3 tracking-tight" style={{ letterSpacing: '-0.02em' }}>What I Learned</h2>
          <p className="text-zinc-600 text-sm">A running log of the moments that changed how I think.</p>
        </div>

        <ol
          className="list-none relative before:absolute before:left-2.75 before:top-2 before:bottom-0 before:w-px before:bg-[#222]"
        >
          {entries.map((entry, i) => (
            <li key={i} className="flex gap-7 mb-14 last:mb-0">
              <div className="shrink-0 w-5.75 h-5.75 rounded-full border border-[#333] bg-[#080808] mt-0.5 relative z-10"
                style={{ boxShadow: '0 0 8px rgba(129,140,248,0.15)' }}
              />
              <div>
                <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-1.5">
                  {entry.period}
                </span>
                <h3 className="text-lg font-semibold mb-3">{entry.title}</h3>
                <p className="text-zinc-400 leading-[1.8] text-sm mb-4">{entry.body}</p>
                <ul className="flex flex-wrap gap-2 list-none">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full text-zinc-600"
                      style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Learning
