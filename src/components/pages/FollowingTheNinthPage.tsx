import { useNavigate } from 'react-router-dom';

const galleryImages = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/548a74ed-2077-4071-b3cb-e09928071852/germany_wall.jpg',
    caption: 'The fall of the Berlin Wall, 1989',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/93782d7a-fa11-4d6b-9a67-60f0bee3d87c/mancrawlingtiananment.jpg',
    caption: 'Tiananmen Square, Beijing',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/0b69bdf1-d81b-4c9e-aa12-6e56c08446c2/choir.jpg',
    caption: 'The Ninth performed in concert',
  },
];

const reviews = [
  {
    quote: "The film is beautiful and powerful. Its affirming message could help address destructive dynamics.",
    source: 'Bill Moyers',
  },
  {
    quote: "Thrilling, smartly assembled and gracefully paced.",
    source: 'The New York Times',
  },
  {
    quote: "Each anecdote builds upon the next to create that rarest of films: a documentary as ineffable and transformative as it sets out to be.",
    source: 'The Village Voice',
  },
  {
    quote: "Following the Ninth succeeds as brilliant filmmaking beyond its important storytelling.",
    source: 'Santa Barbara Independent',
  },
  {
    quote: "An illuminating documentary enabling appreciation from musical and historical perspectives.",
    source: 'Whole Life Times',
  },
  {
    quote: "The reach of Beethoven's final work extends beyond the concert hall in this stirring film.",
    source: 'Film Journal',
  },
  {
    quote: "A deeply moving, inspiring achievement affecting viewers intellectually and emotionally.",
    source: 'Daniel Stewart, Music Director, Santa Cruz County Symphony',
  },
];

export default function FollowingTheNinthPage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/548a74ed-2077-4071-b3cb-e09928071852/germany_wall.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f1923]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="section-title mb-4">Film One</p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Following the Ninth
            </h1>
            <p
              className="text-white/60 text-lg md:text-xl italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Beethoven and the World in 2009
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
                src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/6d008f4e-e591-40fd-a1f3-b2e04797b631/followingtheninth.jpg"
                alt="Following the Ninth poster"
                className="w-full rounded shadow-2xl"
              />
            </div>
            <div>
              <p className="section-title">Synopsis</p>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p>
                  Following the Ninth traces the extraordinary journey of Beethoven's Ninth Symphony from its premiere in Vienna in 1824 to its remarkable role in some of the most significant moments of modern history.
                </p>
                <p>
                  Journalist and author Kerry Candaele travels across four continents to discover how this 200-year-old piece of music continues to inspire people fighting for freedom and human dignity. From the students in Tiananmen Square who played the symphony from loudspeakers as tanks rolled in, to the musicians who performed it at the fall of the Berlin Wall, to the Chilean political prisoners who sang the "Ode to Joy" to sustain themselves through torture and imprisonment — the Ninth has become the universal anthem of human aspiration.
                </p>
                <p>
                  The film features interviews with musicians, historians, activists, and survivors who share their deeply personal connections to this music. Along the way, Candaele explores the life of Beethoven himself — a man who overcame deafness, poverty, and isolation to compose what many consider the greatest piece of music ever written.
                </p>
                <p>
                  Following the Ninth premiered at the 2013 International Documentary Film Festival Amsterdam (IDFA) and has screened at festivals worldwide. It has been broadcast on television in over twenty countries.
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

      {/* Watch the Film */}
      <section className="py-20 bg-[#0a1219]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Watch the Film</h2>
          <p
            className="text-white/50 text-center text-sm mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Now streaming free — made possible through the Ode to Joy Foundation
          </p>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
            <iframe
              src="https://www.youtube.com/embed/vujOUDZnqpU"
              title="Following the Ninth — Full Film"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Beethoven Quote */}
      <section className="py-20 bg-[#0a1219]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-8 h-8 text-[#c41e2a]/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-light italic text-white/90 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "O friends, not these tones! Let us raise our voices in more pleasing and more joyful sounds!"
          </blockquote>
          <cite
            className="block mt-6 text-white/40 text-xs tracking-[0.2em] uppercase not-italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            — Friedrich Schiller, "Ode to Joy" (adapted by Beethoven)
          </cite>
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

      {/* Screening Info */}
      <section className="py-24 bg-[#111e2b]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-title">Screenings & Festivals</p>
            <h2
              className="text-3xl md:text-4xl font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Where to watch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a2633] rounded p-8">
              <h3 className="text-white text-sm tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Festival Screenings
              </h3>
              <ul className="space-y-3 text-white/60 text-base" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <li>IDFA — International Documentary Film Festival Amsterdam (Premiere)</li>
                <li>Hot Docs Canadian International Documentary Festival</li>
                <li>Sheffield Doc/Fest</li>
                <li>Full Frame Documentary Film Festival</li>
                <li>Melbourne International Film Festival</li>
                <li>São Paulo International Film Festival</li>
              </ul>
            </div>
            <div className="bg-[#1a2633] rounded p-8">
              <h3 className="text-white text-sm tracking-[0.15em] uppercase mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Broadcast & Streaming
              </h3>
              <p className="text-white/60 text-base leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Following the Ninth has screened in over 250 cities in the United States and around the globe. The film is now available for free streaming on YouTube through the Ode to Joy Foundation. Contact us for community screening rights.
              </p>
              <button className="btn-outline mt-6">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#0a1219]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="section-title text-center">Press</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#0f1923] border border-white/5 rounded p-8">
                <svg className="w-6 h-6 text-[#c41e2a]/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <blockquote
                  className="text-white/80 text-lg italic leading-relaxed mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{review.quote}"
                </blockquote>
                <cite
                  className="text-white/40 text-xs tracking-[0.15em] uppercase not-italic"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  — {review.source}
                </cite>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('/press')} className="btn-outline">
              Read All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* Next Film CTA */}
      <section
        className="relative py-24 overflow-hidden cursor-pointer group"
        onClick={() => navigate('/love-and-justice')}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/697d1aa8-e2e2-4719-9061-8ab70090015f/filming-isabel-in-chile.jpg)`,
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
            Love and Justice
          </h2>
          <p className="text-[#c41e2a] text-xs tracking-[0.2em] uppercase mt-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Explore &rarr;
          </p>
        </div>
      </section>
    </div>
  );
}
