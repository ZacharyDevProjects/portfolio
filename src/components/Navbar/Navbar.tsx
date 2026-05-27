import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Learning' },
  { id: 'contact', label: 'Contact' },
]

function Navbar() {
  const [activeId, setActiveId] = useState<string>('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
          current = section.id
        }
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full flex justify-center gap-8 py-4 z-50"
      style={{ background: 'rgba(8, 8, 8, 0.75)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      {navLinks.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={[
            'text-sm no-underline transition-all duration-200 tracking-wide',
            activeId === id
              ? 'text-white opacity-100'
              : 'text-zinc-500 hover:text-zinc-200',
          ].join(' ')}
          style={activeId === id ? { textShadow: '0 0 20px rgba(129,140,248,0.5)' } : {}}
        >
          {label}
          {activeId === id && (
            <span className="block h-px mt-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #818cf8, transparent)' }} />
          )}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
