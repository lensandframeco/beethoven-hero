import { type PageName } from '../../App';

interface LoveAndJusticePageProps {
  navigate: (page: PageName) => void;
}

const galleryImages = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/697d1aa8-e2e2-4719-9061-8ab70090015f/filming-isabel-in-chile.jpg',
    caption: 'Filming Isabel in Chile',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/85df8dba-aa40-49f2-90a7-94eee85d940e/kerry-in-chile.jpg',
    caption: 'Kerry Candaele in Chile',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/0b69bdf1-d81b-4c9e-aa12-6e56c08446c2/choir.jpg',
    caption: 'Fidelio in performance',
  },
];

export default function LoveAndJusticePage({ navigate }: LoveAndJusticePageProps) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/697d1aa8-e2e2-4719-9061-8ab70090015f/filming-isabel-in-chile.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f1923]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="section-title mb-4">Film Two</p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Love and Justice
            </h1>
            <p
              className="text-white/60 text-lg md:text-xl italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Beethoven in Chile
            </p>
          </div>
        </div>
      </section>

      {/* Synopsis */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/30003bd5-b4d3-431e-b9a9-f9f46e349e6b/Loveandjustice.jpg"
                alt="Love and Justice poster"
                className="w-full rounded shadow-2xl"
              />
            </div>
            <div>
              <p className="section-title">Synopsis</p>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p>
                  In the darkest days of Pinochet's military dictatorship, political prisoners held in Chile's notorious detention camps found an unlikely source of strength: the "Ode to Joy" chorus from Beethoven's Ninth Symphony. Singing together in defiance of their captors, they transformed a piece of 18th-century European music into an act of resistance and solidarity.
                </p>
                <p>
                  Love and Justice, the second film in the Beethoven Hero trilogy, returns to Chile to explore how Beethoven's only opera, Fidelio, resonates with those who lived through dictatorship, torture, and the long struggle for justice. Fidelio tells the story of Leonore, a woman who disguises herself as a prison guard to rescue her husband, Florestan, from unjust political imprisonment — a narrative that mirrors the experiences of countless Chilean families.
                </p>
                <p>
                  The film follows survivors of Pinochet's regime as they confront their past and seek reconciliation. It interweaves their stories with the music of Fidelio, revealing how Beethoven's themes of love, sacrifice, and the triumph of justice over tyranny speak directly to their experience. Through intimate interviews and powerful musical performances, Love and Justice shows that the wounds of dictatorship are still raw — and that music can be a path toward healing.
                </p>
                <p>
                  Filmed on location in Santiago, Valparaíso, and the Atacama Desert, Love and Justice captures the haunting beauty of Chile alongside the emotional intensity of its history. The film features performances by Chilean musicians and interviews with former political prisoners, human rights advocates, and artists who continue to fight for truth and accountability.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="btn-outline">
                  Request a Screening
                </button>
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
            A film about Beethoven's quest for love and justice, and a Chilean family's search for truth
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/wScZREi_QdI"
              title="Love & Justice — Trailer"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Beethoven / Fidelio Quote */}
      <section className="py-20 bg-[#141f2b]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-8 h-8 text-[#c41e2a]/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white/90 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "He who saves a single life, saves the entire world."
          </blockquote>
          <cite
            className="block mt-6 text-white/40 text-xs tracking-[0.2em] uppercase not-italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            — Beethoven's Fidelio
          </cite>
        </div>
      </section>

      {/* About Fidelio */}
      <section className="py-24 bg-[#111e2b]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-title text-center">About Fidelio</p>
          <h2
            className="text-3xl md:text-4xl font-light text-white text-center mb-12"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Beethoven's only opera
          </h2>
          <div className="space-y-5 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <p>
              Fidelio, Beethoven's sole opera, premiered in Vienna in 1805. It is the story of Leonore, who disguises herself as a young man named "Fidelio" to infiltrate the prison where her husband Florestan is held as a political prisoner by the tyrannical governor Don Pizarro.
            </p>
            <p>
              Beethoven struggled with this opera more than with any other work. He wrote four different overtures and revised the libretto multiple times over nearly a decade. The result is a work that transcends conventional opera to become a profound statement about freedom, marital love, and the courage it takes to stand against injustice.
            </p>
            <p>
              The final scene of Fidelio — in which the prisoners emerge from their cells into the sunlight, singing of freedom and joy — is one of the most powerful moments in all of opera. It is this scene that resonated most deeply with the Chilean political prisoners who found solace in Beethoven's music during some of the darkest years of their country's history.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-title text-center">Gallery</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p
                  className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#0a1219]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="section-title text-center">Press</p>
          <div className="space-y-8 mt-8">
            <div className="bg-[#0f1923] border border-white/5 rounded p-8">
              <blockquote
                className="text-white/80 text-lg italic leading-relaxed mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Unique and beautiful piece! I think Beethoven would have appreciated what you did."
              </blockquote>
              <cite className="text-white/40 text-xs tracking-[0.15em] uppercase not-italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                — Jan Swafford, author of "Beethoven: Anguish and Triumph"
              </cite>
            </div>
            <div className="bg-[#0f1923] border border-white/5 rounded p-8">
              <blockquote
                className="text-white/80 text-lg italic leading-relaxed mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "A very moving film. What a journey. And thank you for remembering our tragedy and our struggles."
              </blockquote>
              <cite className="text-white/40 text-xs tracking-[0.15em] uppercase not-italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                — Ariel Dorfman, author of "Death and the Maiden"
              </cite>
            </div>
            <div className="bg-[#0f1923] border border-white/5 rounded p-8">
              <blockquote
                className="text-white/80 text-lg italic leading-relaxed mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Love & Justice proves classical music can inspire and educate anyone."
              </blockquote>
              <cite className="text-white/40 text-xs tracking-[0.15em] uppercase not-italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                — Jill Brooke, Telluride Daily Planet
              </cite>
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('press')} className="btn-outline">
              Read All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Next Film CTA */}
      <section
        className="relative py-24 overflow-hidden cursor-pointer group"
        onClick={() => navigate('last-will')}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/dc416b82-a87c-426a-aa06-d56159329cca/strings.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-500" />
        <div className="relative text-center px-6">
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Next Film
          </p>
          <h2
            className="text-3xl md:text-5xl font-light text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Last Will & Testament
          </h2>
          <p className="text-[#c41e2a] text-xs tracking-[0.2em] uppercase mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Explore &rarr;
          </p>
        </div>
      </section>
    </div>
  );
}
