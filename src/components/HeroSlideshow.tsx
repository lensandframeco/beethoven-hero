import { useState, useEffect } from 'react';

const heroSlides = [
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/548a74ed-2077-4071-b3cb-e09928071852/germany_wall.jpg',
    alt: 'Berlin Wall celebration',
    headline: 'What will you endure?',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/93782d7a-fa11-4d6b-9a67-60f0bee3d87c/mancrawlingtiananment.jpg',
    alt: 'Tiananmen Square',
    headline: 'What will you risk for freedom?',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/0b69bdf1-d81b-4c9e-aa12-6e56c08446c2/choir.jpg',
    alt: 'Choir performing',
    headline: 'What will you create?',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/697d1aa8-e2e2-4719-9061-8ab70090015f/filming-isabel-in-chile.jpg',
    alt: 'Filming in Chile',
    headline: 'What will you remember?',
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setTextVisible(true);
      }, 600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            backgroundImage: `url(${slide.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={currentSlide !== index}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f1923] to-transparent" />

      {/* Content — headline changes per slide */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white italic leading-tight transition-all duration-500"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            {heroSlides[currentSlide].headline}
          </h1>
          <div
            className="mt-8 w-16 h-[1px] bg-[#c41e2a] mx-auto transition-opacity duration-500"
            style={{ opacity: textVisible ? 1 : 0 }}
          />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === index ? 'bg-white w-6' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
