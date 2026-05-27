function About() {
  return (
    <section id="about" className="pt-2 pb-16 reveal">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="section-divider" />
        <h2 className="text-3xl font-bold mb-10 tracking-tight" style={{ letterSpacing: '-0.02em' }}>About Me</h2>

        <div
          className="rounded-2xl p-8 text-left flex flex-col gap-5"
          style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-zinc-400 leading-relaxed text-sm">
            Currently studying at Epitech, I aim to build strong technical skills
            in software development and cybersecurity.
          </p>
          <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          <p className="text-zinc-400 leading-relaxed text-sm">
            Through my work experience in logistics and production events, I
            developed strong communication, teamwork, and stress-management
            skills.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
