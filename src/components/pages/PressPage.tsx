import { useNavigate } from 'react-router-dom';

const followingTheNinthReviews = [
  {
    quote: "The film is beautiful and powerful. Its affirming message could help address destructive dynamics.",
    source: 'Bill Moyers',
  },
  {
    quote: "Each anecdote builds upon the next to create that rarest of films: a documentary as ineffable and transformative as it sets out to be.",
    source: 'The Village Voice',
  },
  {
    quote: "Thrilling, smartly assembled and gracefully paced.",
    source: 'The New York Times',
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

const loveAndJusticeReviews = [
  {
    quote: "Unique and beautiful piece! I think Beethoven would have appreciated what you did.",
    source: 'Jan Swafford, author of "Beethoven: Anguish and Triumph"',
  },
  {
    quote: "A very moving film. What a journey. And thank you for remembering our tragedy and our struggles.",
    source: 'Ariel Dorfman, author of "Death and the Maiden"',
  },
  {
    quote: "Love & Justice proves classical music can inspire and educate anyone.",
    source: 'Jill Brooke, Telluride Daily Planet',
  },
  {
    quote: "A masterpiece — Love & Justice is thoughtful, beautiful and very important.",
    source: 'Joan Rutkowski',
  },
  {
    quote: "Poignant, mysterious, risky, and brilliant.",
    source: 'Ben Lamarca',
  },
  {
    quote: "Intimate, moving — often painfully so. A lovely film.",
    source: 'Marina Chicurel',
  },
];

export default function PressPage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/0b69bdf1-d81b-4c9e-aa12-6e56c08446c2/choir.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f1923]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="section-title mb-4">Reviews & Coverage</p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Press
            </h1>
          </div>
        </div>
      </section>

      {/* Following the Ninth Reviews */}
      <section className="py-24 bg-[#0a1219]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-12">
            <img
              src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/6d008f4e-e591-40fd-a1f3-b2e04797b631/followingtheninth.jpg"
              alt="Following the Ninth"
              className="w-20 h-28 object-cover rounded hidden sm:block"
            />
            <div>
              <p className="section-title mb-1">Film One</p>
              <h2
                className="text-2xl md:text-3xl font-light text-white cursor-pointer hover:text-white/80 transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                onClick={() => navigate('/following-the-ninth')}
              >
                Following the Ninth
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {followingTheNinthReviews.map((review, index) => (
              <div key={index} className="bg-[#0f1923] border border-white/5 rounded p-6">
                <blockquote
                  className="text-white/75 text-base italic leading-relaxed mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{review.quote}"
                </blockquote>
                <cite className="text-white/40 text-[11px] tracking-[0.12em] uppercase not-italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  — {review.source}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Love and Justice Reviews */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-12">
            <img
              src="https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/30003bd5-b4d3-431e-b9a9-f9f46e349e6b/Loveandjustice.jpg"
              alt="Love and Justice"
              className="w-20 h-28 object-cover rounded hidden sm:block"
            />
            <div>
              <p className="section-title mb-1">Film Two</p>
              <h2
                className="text-2xl md:text-3xl font-light text-white cursor-pointer hover:text-white/80 transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                onClick={() => navigate('/love-and-justice')}
              >
                Love and Justice
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loveAndJusticeReviews.map((review, index) => (
              <div key={index} className="bg-[#111e2b] border border-white/5 rounded p-6">
                <blockquote
                  className="text-white/75 text-base italic leading-relaxed mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{review.quote}"
                </blockquote>
                <cite className="text-white/40 text-[11px] tracking-[0.12em] uppercase not-italic" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  — {review.source}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-24 bg-[#0a1219]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-title">Press Inquiries</p>
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Press Inquiries
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            For press inquiries, screening copies, interviews, and high-resolution images, please contact us. We are happy to provide materials for reviews, features, and broadcast coverage.
          </p>
          <a
            href="mailto:info@odetojoyfoundation.org?subject=Press Inquiry — Beethoven Hero"
            className="btn-primary inline-block"
          >
            Contact Press Team
          </a>
          <p className="text-white/30 text-sm mt-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            info@odetojoyfoundation.org
          </p>
        </div>
      </section>
    </div>
  );
}
