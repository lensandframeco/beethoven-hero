import { useState, useEffect } from 'react';

const reviews = [
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
    quote: "Unique and beautiful piece! I think Beethoven would have appreciated what you did.",
    source: 'Jan Swafford, author of "Beethoven: Anguish and Triumph"',
  },
];

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#0a1219]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <p className="section-title">What They're Saying</p>

        <div className="relative min-h-[200px] flex items-center justify-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000"
              style={{ opacity: currentReview === index ? 1 : 0, pointerEvents: currentReview === index ? 'auto' : 'none' }}
            >
              {/* Quote mark */}
              <svg className="w-8 h-8 text-[#c41e2a]/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <blockquote
                className="text-xl md:text-2xl lg:text-3xl font-light italic text-white/90 leading-relaxed mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{review.quote}"
              </blockquote>

              <cite
                className="text-white/40 text-xs tracking-[0.2em] uppercase not-italic"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                — {review.source}
              </cite>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center space-x-2 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                currentReview === index ? 'bg-[#c41e2a] w-4' : 'bg-white/20'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
