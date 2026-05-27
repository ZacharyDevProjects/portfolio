import profilePhoto from '../../../assets/PP.png'

function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex flex-col justify-center items-center text-center gap-6 px-5 pb-8">
      <div
        className="rounded-full p-0.5"
        style={{ background: 'linear-gradient(135deg, #818cf8, #4f46e5, #080808 60%)' }}
      >
        <img
          src={profilePhoto}
          alt="Portrait of Zachary Joriot"
          className="w-36 h-36 rounded-full object-cover object-top"
          style={{ background: '#080808' }}
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-5xl font-bold tracking-tight gradient-text" style={{ letterSpacing: '-0.02em' }}>
          Zachary Joriot
        </h1>
        <h2 className="text-base font-medium tracking-widest uppercase" style={{ color: 'rgba(129,140,248,0.7)', letterSpacing: '0.2em' }}>
          Epitech Student — Cybersecurity Enjoyer
        </h2>
      </div>

      <p className="max-w-sm leading-relaxed text-zinc-400 text-sm">
        Computer science student passionate about programming,
        cybersecurity, and solving complex problems.
      </p>

      <div className="flex gap-3 mt-1">
        <a href="#contact" className="btn">Contact me</a>
        <a href="#projects" className="btn">View projects</a>
      </div>

    </section>
  )
}

export default Hero
