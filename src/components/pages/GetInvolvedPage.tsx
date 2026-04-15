import { useEffect, useState, type FormEvent } from 'react';
import { type PageName } from '../../App';

interface GetInvolvedPageProps {
  navigate: (page: PageName) => void;
}

function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    try {
      const res = await fetch('https://formspree.io/f/mgonlqll', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="py-20 px-6 bg-[#141f2b]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <h2
              className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </h2>
            <p
              className="text-white/80 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Have questions about our films, interested in hosting a screening,
              or want to discuss partnership opportunities? We'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c41e2a]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c41e2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a
                  href="mailto:info@odetojoyfoundation.org"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  info@odetojoyfoundation.org
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c41e2a]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c41e2a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </div>
                <a
                  href="https://www.facebook.com/followingtheninth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#c41e2a]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c41e2a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                  </svg>
                </div>
                <a
                  href="https://twitter.com/search?q=Kerry%20Candaele"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-white text-xl mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Thank you for reaching out
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:border-[#c41e2a]/50 focus:outline-none focus:ring-1 focus:ring-[#c41e2a]/30 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:border-[#c41e2a]/50 focus:outline-none focus:ring-1 focus:ring-[#c41e2a]/30 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:border-[#c41e2a]/50 focus:outline-none focus:ring-1 focus:ring-[#c41e2a]/30 transition-colors"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    <option value="general" className="bg-[#141f2b]">General Inquiry</option>
                    <option value="screening" className="bg-[#141f2b]">Host a Screening</option>
                    <option value="educational" className="bg-[#141f2b]">Educational Use</option>
                    <option value="press" className="bg-[#141f2b]">Press / Media</option>
                    <option value="partnership" className="bg-[#141f2b]">Partnership</option>
                    <option value="donation" className="bg-[#141f2b]">Donation Question</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/50 text-xs tracking-[0.15em] uppercase mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white text-sm placeholder-white/30 focus:border-[#c41e2a]/50 focus:outline-none focus:ring-1 focus:ring-[#c41e2a]/30 transition-colors resize-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    placeholder="How can we help?"
                  />
                </div>
                {/* Hidden field to identify source */}
                <input type="hidden" name="_source" value="beethovenhero.com" />
                {status === 'error' && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#c41e2a] hover:bg-[#a81925] disabled:opacity-50 text-white py-3 px-6 rounded-md text-sm tracking-[0.15em] uppercase transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GetInvolvedPage({ navigate }: GetInvolvedPageProps) {
  // Givebutter is embedded as an iframe below

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/0b69bdf1-d81b-4c9e-aa12-6e56c08446c2/choir.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <h1
            className="text-4xl md:text-6xl font-light text-white mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Get Involved
          </h1>
          <p
            className="text-[#c41e2a] text-sm md:text-base tracking-[0.25em] uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Support the Beethoven | Hero Trilogy
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-[#0f1923]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase mb-8"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Our Mission
          </h2>
          <p
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            The Ode to Joy Foundation is a non-profit organization dedicated to developing
            Beethoven music curricula for young people around the world. Your support helps
            bring the transformative power of Beethoven's music to new audiences and ensures
            the completion of the Beethoven | Hero documentary trilogy.
          </p>
          <p
            className="text-white/60 text-base leading-relaxed"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every contribution — no matter the size — helps us continue our journey to explore
            how Beethoven's music continues to work upon the world, inspire courage in the face
            of adversity, and unite people across cultures and generations.
          </p>
        </div>
      </section>

      {/* Give Butter Donation Widget */}
      <section className="py-20 px-6 bg-[#141f2b]">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase mb-12 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Make a Donation
          </h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://givebutter.com/embed/c/odetojoy"
              width="100%"
              height="600"
              style={{ border: 'none' }}
              title="Donate to Ode to Joy Foundation"
              allow="payment"
            />
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 px-6 bg-[#0f1923]">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-[#c41e2a] text-sm tracking-[0.3em] uppercase mb-12 text-center"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Other Ways to Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-white/10 rounded-lg hover:border-[#c41e2a]/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c41e2a]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c41e2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2h-2M9 14l2 2 4-4" />
                </svg>
              </div>
              <h3
                className="text-white text-lg mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Host a Screening
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Bring the Beethoven | Hero films to your community, school, or organization.
                We provide screening kits and support for events of all sizes.
              </p>
            </div>

            <div className="text-center p-8 border border-white/10 rounded-lg hover:border-[#c41e2a]/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c41e2a]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c41e2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3
                className="text-white text-lg mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Spread the Word
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Share our films and mission with your friends, family, and networks.
                Follow us on social media and help us reach new audiences worldwide.
              </p>
            </div>

            <div className="text-center p-8 border border-white/10 rounded-lg hover:border-[#c41e2a]/30 transition-colors">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#c41e2a]/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-[#c41e2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3
                className="text-white text-lg mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Educational Use
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Our films are used in classrooms and educational programs worldwide.
                Contact us for educational licensing and curriculum materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* Beethoven Quote */}
      <section className="py-16 px-6 bg-[#0f1923] border-t border-b border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote>
            <p
              className="text-white/70 text-xl md:text-2xl italic leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Since my earliest childhood, I have wanted to place my art in the service
              of suffering humanity whenever possible."
            </p>
            <cite
              className="text-white/40 text-sm tracking-[0.2em] uppercase not-italic"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              — Ludwig van Beethoven, 1812
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
