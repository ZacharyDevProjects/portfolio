function Footer() {
  return (
    <footer
      className="py-10 text-center text-sm"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(113,113,122,0.7)' }}
    >
      <div className="flex justify-center items-center gap-6 mb-3">
        <a
          href="https://github.com/ZacharyDevProjects"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:text-zinc-300"
        >
          GitHub
        </a>
        <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
        <a
          href="mailto:zachary.joriot@epitech.eu"
          className="transition-colors duration-200 hover:text-zinc-300"
        >
          zachary.joriot@epitech.eu
        </a>
      </div>
      <p>© 2026 Zachary Joriot</p>
    </footer>
  )
}

export default Footer
