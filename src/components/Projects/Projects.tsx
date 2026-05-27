import { useState, useRef, useEffect } from 'react'
import padelHubImg from '../../../assets/padel_hub.png'
import nextbuyImg from '../../../assets/nextbuy.png'
import aliceImg from '../../../assets/alice.png'

interface Project {
  label: string
  title: string
  tagline: string
  description: string
  role: string | null
  objective: string
  learning: string
  tags: string[]
  github: string
  demo: string | null
  accent: string
  image: string
  colors: [string, string]
}

const RADIUS = 300

const projects: Project[] = [
  {
    label: 'Project 01',
    title: 'Padel Hub',
    tagline: 'A padel-first social mobile app centralizing everything players need.',
    description:
      'Full-stack MVP built with a team of 4 at Epitech. Brings together court booking, coach discovery, activity tracking and a social feed into one React Native application.',
    role: 'Frontend developer — translated Figma designs into React Native screens and components, and managed navigation flow with Expo Router.',
    objective:
      'Deliver a working MVP from Figma prototype to running app in limited time, coordinating with backend developers on API contracts and data shapes.',
    learning:
      'Really learned that translating a Figma design is way more than copying pixels — it\'s about understanding intent. Managing state across screens with Expo Router was trickier than I expected, especially tracking state that bounces between different navigators. But it showed me how small architecture choices directly impact the user experience you end up shipping.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Figma', 'Node.js', 'MySQL'],
    github: 'https://github.com/Jules-Epitech/Padel-hub',
    demo: null,
    accent: 'text-violet-400',
    image: padelHubImg,
    colors: ['rgba(173, 216, 230, 0.15)', 'rgba(144, 238, 144, 0.15)'],
  },
  {
    label: 'Project 02',
    title: 'NextBuy',
    tagline: 'Finding business signals inside supermarket data.',
    description:
      'A data analysis and ML project extracting trends, insights and optimization ideas from retail customer data. Includes a live Streamlit dashboard for non-technical stakeholders.',
    role: null,
    objective:
      'Transform raw commercial data into readable insight and actionable priorities for marketing and promotions decisions.',
    learning:
      'Realized pretty quickly that building models without a business question is just... building models. Had to learn to actually think about which metrics matter before spinning up scikit-learn. The insights we found in that retail data meant so much more when I could trace them back to actual marketing decisions.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Jupyter', 'Machine Learning'],
    github: 'https://github.com/Jules-Epitech/Shop-business-analyses',
    demo: 'https://shop-business-analyses-epitech.streamlit.app',
    accent: 'text-emerald-400',
    image: nextbuyImg,
    colors: ['rgba(255, 165, 0, 0.15)', 'rgba(255, 182, 193, 0.15)'],
  },
  {
    label: 'Project 03',
    title: 'NLP Book Classification',
    tagline: 'Generating structured book cards from raw text with NLP.',
    description:
      'An NLP engine that analyzes books from Project Gutenberg and produces structured book cards — summaries, topic extraction, character and location recognition, and similarity scoring.',
    role: null,
    objective:
      'Help publishers and editors quickly make sense of a large library by automating text analysis and classification without manual reading.',
    learning:
      'NLP pipelines are like dominoes — something breaks early on and you spend hours trying to figure out where it all went wrong. Unit testing each stage of the pipeline saved me multiple times when tweaking models. Also got very familiar with the real mess: weird encodings, tokenization that doesn\'t behave, NER hallucinating on proper nouns.',
    tags: ['Python', 'NLTK', 'spaCy', 'Scikit-learn', 'Streamlit', 'NLP'],
    github: 'https://github.com/Jules-Epitech/NLP-Book-classification',
    demo: null,
    accent: 'text-blue-400',
    image: aliceImg,
    colors: ['rgba(199, 21, 133, 0.15)', 'rgba(128, 0, 128, 0.15)'],
  },
]

export const inputClass =
  'w-full px-4 py-3 bg-[#161616] border border-[#2a2a2a] text-white rounded text-sm placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors'

function Projects() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [fading, setFading] = useState(false)

  const carouselRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const angleRef = useRef(0)
  const snapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const navigate = (next: number) => {
    if (next === activeIdx) return
    if (snapTimerRef.current) clearTimeout(snapTimerRef.current)

    const targetBase = -next * 120
    const k = Math.round((angleRef.current - targetBase) / 360)
    const targetAngle = targetBase + 360 * k
    angleRef.current = targetAngle

    if (carouselRef.current) {
      carouselRef.current.style.transition =
        'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      carouselRef.current.style.transform = `rotateY(${targetAngle}deg)`
    }

    setFading(true)
    setTimeout(() => {
      setActiveIdx(next)
      setFading(false)
    }, 160)
  }

  const prev = () => navigate((activeIdx - 1 + projects.length) % projects.length)
  const next = () => navigate((activeIdx + 1) % projects.length)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current)

      angleRef.current -= e.deltaY * 0.3

      if (carouselRef.current) {
        carouselRef.current.style.transition = 'none'
        carouselRef.current.style.transform = `rotateY(${angleRef.current}deg)`
      }

      snapTimerRef.current = setTimeout(() => {
        const snapped = Math.round(angleRef.current / 120) * 120
        angleRef.current = snapped

        if (carouselRef.current) {
          carouselRef.current.style.transition =
            'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          carouselRef.current.style.transform = `rotateY(${snapped}deg)`
        }

        const normalizedAngle = (((-snapped % 360) + 360) % 360)
        const newIdx = Math.round(normalizedAngle / 120) % 3

        setFading(true)
        setTimeout(() => {
          setActiveIdx(newIdx)
          setFading(false)
        }, 160)
      }, 250)
    }

    wrapper.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      wrapper.removeEventListener('wheel', onWheel)
      if (snapTimerRef.current) clearTimeout(snapTimerRef.current)
    }
  }, [])

  const p = projects[activeIdx]

  return (
    <section
      id="projects"
      className="py-20 reveal"
      style={{
        background: `radial-gradient(circle at center, ${p.colors[0]} 0%, ${p.colors[1]} 100%)`,
        transition: 'background 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-baseline justify-between mb-14">
          <div>
            <div className="section-divider" style={{ margin: '0 0 0.75rem 0' }} />
            <h2 className="text-3xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>Projects</h2>
          </div>
          <span className="text-zinc-700 text-sm tabular-nums">
            {String(activeIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-start transition-opacity duration-150 ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          <div>
            <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-3">
              {p.label}
            </span>
            <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">{p.tagline}</p>
            <p className="text-zinc-300 leading-relaxed mb-8 text-sm">{p.description}</p>

            {p.role && (
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">My role</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.role}</p>
              </div>
            )}

            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">Objective</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.objective}</p>
            </div>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
                Result / learning
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.learning}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full text-zinc-500"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
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
              perspective: '1100px',
              height: '480px',
            }}
          >
            <div
              ref={carouselRef}
              style={{
                transformStyle: 'preserve-3d',
                width: '420px',
                height: '270px',
                position: 'relative',
              }}
            >
              {projects.map((proj, i) => (
                <div
                  key={proj.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transform: `rotateY(${i * 120}deg) translateZ(${RADIUS}px)`,
                    backfaceVisibility: 'hidden',
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
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeIdx ? 'bg-white' : 'bg-[#333] hover:bg-zinc-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
