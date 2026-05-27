const technicalSkills: string[] = [
  'Python',
  'HTML / CSS / JavaScript',
  'React / React Native',
  'TypeScript',
  'C / Unix',
  'NLP / Machine Learning',
]

const softSkills: string[] = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Organization',
]

function SkillPill({ label }: { label: string }) {
  return (
    <li
      className="px-4 py-2 text-sm font-medium cursor-default transition-all duration-200"
      style={{
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '9999px',
        color: 'rgba(161,161,170,1)',
        background: 'rgba(255,255,255,0.025)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLLIElement
        el.style.borderColor = 'rgba(129,140,248,0.4)'
        el.style.color = 'rgba(255,255,255,0.95)'
        el.style.background = 'rgba(129,140,248,0.07)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLLIElement
        el.style.borderColor = 'rgba(255,255,255,0.08)'
        el.style.color = 'rgba(161,161,170,1)'
        el.style.background = 'rgba(255,255,255,0.025)'
      }}
    >
      {label}
    </li>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-16 reveal">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="section-divider" />
        <h2 className="text-3xl font-bold mb-14 tracking-tight" style={{ letterSpacing: '-0.02em' }}>Skills</h2>

        <div className="flex flex-col gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(129,140,248,0.6)' }}>Technical</p>
            <ul className="flex flex-wrap justify-center gap-3 list-none">
              {technicalSkills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </ul>
          </div>
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.04)' }} />
          <div>
            <p className="text-xs uppercase tracking-widest mb-5" style={{ color: 'rgba(129,140,248,0.6)' }}>Soft skills</p>
            <ul className="flex flex-wrap justify-center gap-3 list-none">
              {softSkills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
