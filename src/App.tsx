import { useRevealObserver } from './hooks/useRevealObserver'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Learning from './components/Learning/Learning'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  useRevealObserver()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App