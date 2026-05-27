interface LearningEntry {
  period: string
  title: string
  body: string
  tags: string[]
}

const entries: LearningEntry[] = [
  {
    period: '2023 – 2024',
    title: 'Working in Logistics',
    body: 'Two jobs in a row at Fréquence and WMH Project showed me that coordination is way messier than it sounds. You\'re managing inventory, packing orders, and trying to stay synced with suppliers — everything has to be exact. Then events production added the chaos factor: last-minute changes, tight deadlines, and a team that needed to be on the same page right now. I took that stress tolerance and constant communication straight into team projects at Epitech.',
    tags: ['Logistics', 'Coordination', 'Stress management', 'Teamwork'],
  },
  {
    period: 'Nov 2025 – Jan 2026',
    title: 'Web & Front-End Development',
    body: 'HTML and CSS came pretty fast, but React actually made me rethink how I build things. Components, state, render cycles — it\'s not intuitive at first. Building this portfolio was different from exercises: I had something real to ship, actual design choices to defend, and code that had to not just work but feel good. That obsession with details from running events kept me honest here.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    period: 'Feb – May 2026',
    title: 'Data, ML & Cybersecurity',
    body: 'Working on NextBuy and the NLP stuff made clear that numbers are only useful if they actually connect to a decision someone needs to make. Data pipelines and training models for their own sake is useless. At the same time I started digging into CTF challenges and reading about CVE exploits. That attacker perspective changed how I code now — I think about input validation, trust boundaries, and XSS vectors. From the get-go not after all is done',
    tags: ['Python', 'Machine Learning', 'NLP', 'CTF', 'OWASP', 'Security mindset'],
  },
]

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
