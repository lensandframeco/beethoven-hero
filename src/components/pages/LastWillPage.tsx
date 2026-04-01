import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';

export default function LastWillPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Last Will and Temperament | Beethoven Hero"
        description="Last Will and Temperament — a documentary by Kerry Candaele exploring Beethoven's late string quartets and the intimate, radical music he wrote at the end of his life."
        canonical="/last-will"
        schema={{ "@context": "https://schema.org", "@type": "Movie", "name": "Last Will and Temperament", "description": "Documentary exploring Beethoven's late string quartets and their enduring emotional power.", "director": { "@type": "Person", "name": "Kerry Candaele" } }}
      />
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/dc416b82-a87c-426a-aa06-d56159329cca/strings.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f1923]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="section-title mb-4">Film Three</p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Last Will & Testament
            </h1>
            <p
              className="text-white/60 text-lg md:text-xl italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              The Late String Quartets
            </p>
            <div className="mt-6 inline-block px-4 py-1.5 border border-[#c41e2a]/40 rounded-full">
              <span className="text-[#c41e2a] text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                In Production
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/c4b374c1-40e8-47a7-8009-fce57ecac60d/lastwillandtestament.jpg"
                alt="Last Will & Testament poster"
                className="w-full rounded shadow-2xl"
              />
            </div>
            <div>
              <p className="section-title">About the Film</p>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p>
                  The final chapter of the Beethoven Hero trilogy turns inward, from the public square to the most intimate chambers of music-making. Last Will & Testament explores the late string quartets that Beethoven composed in the final years of his life — works so radical, so deeply personal, and so far ahead of their time that they baffled audiences and critics alike.
                </p>
                <p>
                  Written between 1825 and 1826, when Beethoven was completely deaf and in failing health, the late quartets represent a journey into the deepest reaches of human expression. They move from savage intensity to ethereal transcendence, from bitter humor to shattering grief, often within the space of a few bars. Today they are regarded as among the greatest achievements not only in music, but in all of Western art.
                </p>
                <p>
                  The film follows some of the world's most distinguished string quartets as they rehearse, perform, and reflect on these extraordinary works. It explores the challenge of performing music that seems to demand more than human capability — music that, as one musician puts it, "comes from a place beyond technique, beyond interpretation, beyond anything we can fully understand."
                </p>
                <p>
                  Last Will & Testament also returns to Beethoven's biography, examining the extraordinary circumstances of his final years: his complete deafness, his estrangement from his nephew Karl, his deteriorating health, and the fierce creative energy that drove him to compose some of the most visionary music ever conceived. The film asks: what does it mean to create at the very limits of human endurance? And what can these late works teach us about facing mortality with courage and honesty?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch the Trailer */}
      <section className="py-20 bg-[#0a1219]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Watch the Trailer</h2>
          <p
            className="text-white/50 text-center text-sm mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A contemplative journey into Beethoven's final years and his most visionary music
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src="https://player.vimeo.com/video/351051812"
              title="Last Will & Testament — Trailer"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Beethoven Quote */}
      <section className="py-20 bg-[#141f2b]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-8 h-8 text-[#c41e2a]/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white/90 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Must it be? It must be! It must be!"
          </blockquote>
          <cite
            className="block mt-6 text-white/40 text-xs tracking-[0.2em] uppercase not-italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            — Beethoven, String Quartet No. 16 in F major, Op. 135
          </cite>
        </div>
      </section>

      {/* The Late Quartets */}
      <section className="py-24 bg-[#111e2b]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-title text-center">The Late Quartets</p>
          <h2
            className="text-3xl md:text-4xl font-light text-white text-center mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Music beyond the limits of expression
          </h2>
          <div className="space-y-6">
            {[
              { opus: 'Op. 127', key: 'E-flat major', year: '1825', description: 'The first of the late quartets opens with a majestic introduction before giving way to music of extraordinary warmth and lyrical beauty. The slow movement is a set of variations of breathtaking tenderness.' },
              { opus: 'Op. 132', key: 'A minor', year: '1825', description: 'At its heart is the "Holy Song of Thanksgiving of a Convalescent to the Deity" — a movement of sublime spiritual intensity that Beethoven wrote after recovering from a serious illness. It is music that seems to touch the very essence of human vulnerability and gratitude.' },
              { opus: 'Op. 130', key: 'B-flat major', year: '1825-26', description: 'The most expansive of the late quartets, with six movements that range from the deeply serious to the comically bizarre. Originally ended with the Große Fuge, a movement of such overwhelming power that Beethoven\'s publisher persuaded him to replace it.' },
              { opus: 'Op. 131', key: 'C-sharp minor', year: '1826', description: 'Seven movements played without pause, opening with a fugue of heartbreaking beauty. Beethoven himself considered it his greatest work. Schubert, hearing it shortly before his own death, said: "After this, what is left for us to write?"' },
              { opus: 'Op. 135', key: 'F major', year: '1826', description: 'Beethoven\'s final completed work. Shorter and more classical in form than its predecessors, it ends with a movement inscribed "The Difficult Decision" — "Must it be? It must be!" — a question that resonates far beyond the world of music.' },
            ].map((quartet) => (
              <div key={quartet.opus} className="bg-[#1a2633] rounded p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <p className="text-[#c41e2a] text-sm font-medium tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {quartet.opus}
                    </p>
                    <p className="text-white/40 text-xs mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {quartet.key} ({quartet.year})
                    </p>
                  </div>
                  <p className="text-white/70 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {quartet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support / Get Involved */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-title">Support This Film</p>
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Help us complete the trilogy
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Last Will & Testament is currently in production. We are seeking funding to complete filming, post-production, and festival distribution. Your support will help bring the final chapter of the Beethoven Hero trilogy to audiences worldwide and ensure that these stories of music, endurance, and the human spirit reach the widest possible audience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              Donate Now
            </button>
            <button className="btn-outline">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Back to Trilogy */}
      <section
        className="relative py-24 overflow-hidden cursor-pointer group"
        onClick={() => navigate('/following-the-ninth')}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/548a74ed-2077-4071-b3cb-e09928071852/germany_wall.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500" />
        <div className="relative text-center px-6">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Back to the Beginning
          </p>
          <h2
            className="text-3xl md:text-5xl font-light text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Following the Ninth
          </h2>
          <p className="text-[#c41e2a] text-xs tracking-[0.2em] uppercase mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Explore &rarr;
          </p>
        </div>
      </section>
    </div>
  );
}
