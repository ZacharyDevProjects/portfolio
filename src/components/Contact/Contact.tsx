import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import cvFile from '../../../assets/CV Zachary.pdf'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

const inputBase =
  'w-full px-4 py-3 text-white text-sm placeholder-zinc-600 focus:outline-none transition-all duration-200 rounded-lg bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/50 focus:bg-indigo-500/[0.04]'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert('EmailJS is not configured yet — see the comments in Contact.tsx.')
      return
    }
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY)
      setStatus('sent')
      formRef.current?.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 reveal">
      <div className="max-w-2xl mx-auto px-6">

        <div className="text-center mb-8">
          <div className="section-divider" />
          <h2 className="text-3xl font-bold tracking-tight" style={{ letterSpacing: '-0.02em' }}>Contact</h2>
        </div>

        <div
          className="rounded-2xl p-8 flex flex-col gap-6"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 0 60px rgba(99,102,241,0.06)',
          }}
        >
          <div className="flex flex-wrap gap-2">
            <a href="mailto:zachary.joriot@epitech.eu" className="btn text-xs">
              ✉ zachary.joriot@epitech.eu
            </a>
            <a href="https://github.com/ZacharyDevProjects" target="_blank" rel="noopener noreferrer" className="btn text-xs">
              GitHub
            </a>
            <a href="tel:0631553405" className="btn text-xs">
              06 31 55 34 05
            </a>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          <form ref={formRef} className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className={inputBase}
              type="text"
              name="from_name"
              placeholder="Your name"
              required
            />
            <input
              className={inputBase}
              type="email"
              name="from_email"
              placeholder="Your email"
              required
            />
            <textarea
              className={`${inputBase} resize-none`}
              name="message"
              placeholder="Your message"
              rows={5}
              required
            />

            <button
              className="btn w-full justify-center mt-1"
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              style={status === 'sending' || status === 'sent' ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message sent ✓' : 'Send message'}
            </button>

            {status === 'error' && (
              <p className="text-red-400 text-xs text-center">
                Something went wrong — try emailing directly at zachary.joriot@epitech.eu
              </p>
            )}
          </form>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          <a href={cvFile} className="btn w-full justify-center" download="CV_zachary_joriot.pdf">
            Download CV
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
