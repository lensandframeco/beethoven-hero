import { useNavigate } from 'react-router-dom';
import HeroSlideshow from '../HeroSlideshow';
import ReviewCarousel from '../ReviewCarousel';
import SEO from '../SEO';

const films = [
  {
    title: 'Following the Ninth',
    subtitle: 'Beethoven and the World in 2009',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/6d008f4e-e591-40fd-a1f3-b2e04797b631/followingtheninth.jpg',
    description: 'From Tiananmen Square to the fall of the Berlin Wall, from a Chilean political prison to the streets of Soweto, this documentary tracks the extraordinary ways Beethoven\'s Ninth Symphony has been adopted by freedom movements across the globe. Following journalist and author Kerry Candaele across four continents, the film reveals the power of music to inspire hope and resistance in the face of oppression.',
    path: '/following-the-ninth',
  },
  {
    title: 'Love and Justice',
    subtitle: 'Beethoven in Chile',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/30003bd5-b4d3-431e-b9a9-f9f46e349e6b/Loveandjustice.jpg',
    description: 'In Pinochet\'s Chile, political prisoners sustained themselves by singing the "Ode to Joy" chorus from Beethoven\'s Ninth. Love and Justice returns to Chile to explore how Beethoven\'s only opera, Fidelio — a story of a woman who risks everything to free her unjustly imprisoned husband — resonates with those who lived through dictatorship, torture, and the long struggle for justice.',
    path: '/love-and-justice',
  },
  {
    title: 'Last Will & Testament',
    subtitle: 'The Late String Quartets',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/c4b374c1-40e8-47a7-8009-fce57ecac60d/lastwillandtestament.jpg',
    description: 'The final chapter of the trilogy turns inward, exploring the late string quartets that Beethoven composed in the last years of his life — music so radical and intimate that it baffled his contemporaries but has come to be regarded as among the greatest achievements in Western art. How do performers and listeners today grapple with music that pushes the boundaries of human expression?',
    path: '/last-will',
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <SEO
        title="Beethoven Hero | Documentary Film Trilogy"
        description="Beethoven Hero is a documentary trilogy by Kerry Candaele exploring how Beethoven's music has inspired courage and hope across the world — from the Berlin Wall to Tiananmen Square."
        canonical="/"
        schema={{ "@context": "https://schema.org", "@type": "Movie", "name": "Beethoven Hero", "description": "Documentary trilogy exploring Beethoven's Ninth Symphony and its global impact on human rights and democracy.", "director": { "@type": "Person", "name": "Kerry Candaele" } }}
      />
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Introduction Section */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="section-title">About the Trilogy</p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                250 years after his birth, Beethoven's music still ignites the human spirit
              </h2>
              <div className="space-y-5 text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <p>
                  Since its premiere in Vienna in 1824, Beethoven's Ninth Symphony has been performed at moments of great historical change — from the fall of the Berlin Wall to the protests in Tiananmen Square, from the struggle against apartheid in South Africa to the fight for democracy in Chile.
                </p>
                <p>
                  Journalist and author Kerry Candaele spent years traveling the world, discovering the remarkable stories of people who found courage, solace, and inspiration in Beethoven's music. The Beethoven Hero trilogy brings these stories to the screen in three films that span continents, centuries, and the full range of human emotion.
                </p>
                <p>
                  From the universal joy of the Ninth Symphony to the radical intimacy of the late string quartets, this trilogy explores what it means to endure — and what music can give us when all else is taken away.
                </p>
              </div>
              <button
                onClick={() => navigate('/filmmakers')}
                className="btn-outline mt-10"
              >
                Meet the Filmmakers
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded overflow-hidden">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/7586bbce-aa5b-40fd-96dd-c10e552766a3/Kerry_04-2304w.jpg"
                  alt="Kerry Candaele"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1a2633] px-6 py-4 rounded">
                <p className="text-white text-sm font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>Kerry Candaele</p>
                <p className="text-white/50 text-xs" style={{ fontFamily: "'Montserrat', sans-serif" }}>Director & Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Trilogy Section */}
      <section className="py-24 bg-[#111e2b]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">The Trilogy</p>
            <h2
              className="text-3xl md:text-4xl font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Three films. Three facets of genius.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {films.map((film) => (
              <div key={film.title} className="film-card group cursor-pointer" onClick={() => navigate(film.path)}>
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={film.image}
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xs tracking-[0.2em] uppercase text-[#c41e2a] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {film.subtitle}
                  </h3>
                  <h4
                    className="text-xl font-light text-white mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {film.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed line-clamp-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {film.description}
                  </p>
                  <span
                    className="inline-block mt-4 text-[#c41e2a] text-xs tracking-[0.15em] uppercase group-hover:tracking-[0.25em] transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beethoven Quote Banner */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/0b69bdf1-d81b-4c9e-aa12-6e56c08446c2/choir.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-8 h-8 text-[#c41e2a]/60 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
          </svg>
          <blockquote
            className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Music is a higher revelation than all wisdom and philosophy."
          </blockquote>
          <cite
            className="block mt-8 text-white/50 text-sm tracking-[0.2em] uppercase not-italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            — Ludwig van Beethoven
          </cite>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewCarousel />

      {/* Get Involved CTA */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-title">Get Involved</p>
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Help bring these stories to the world
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            The Beethoven Hero trilogy is an independent production. Your support helps us complete the final film in the trilogy, bring all three films to festivals and theaters worldwide, and share the inspiring stories of people who found hope in Beethoven's music.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              Support the Films
            </button>
            <button className="btn-outline">
              Host a Screening
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
