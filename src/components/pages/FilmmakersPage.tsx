import { type PageName } from '../../App';

interface FilmmakersPageProps {
  navigate: (page: PageName) => void;
}

const filmmakers = [
  {
    name: 'Kerry Candaele',
    role: 'Director & Writer',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/7586bbce-aa5b-40fd-96dd-c10e552766a3/Kerry_04-2304w.jpg',
    bio: 'Kerry Candaele is a journalist, author, and filmmaker whose work explores the intersection of music, politics, and the human experience. His writing has appeared in the Los Angeles Times, The Nation, and Salon, among other publications. He is the author of "Bound for Glory," a history of his mother Helen Candaele St. Aubin, who played in the All-American Girls Professional Baseball League — the league that inspired the film "A League of Their Own." Kerry\'s deep love of Beethoven\'s music and his fascination with how it has been adopted by freedom movements around the world led him to create the Beethoven Hero trilogy. He has spent more than a decade traveling across four continents, documenting the extraordinary stories of people who found courage, solace, and inspiration in Beethoven\'s compositions.',
  },
  {
    name: 'Pamela Gunther',
    role: 'Executive Producer',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/1fcb7a03-387d-44c4-aec4-011b8d37abb9/asdada.jpg',
    bio: 'Pamela Gunther is an award-winning producer with over two decades of experience in documentary and independent film. She has produced and executive produced numerous critically acclaimed documentaries that have screened at major festivals including Sundance, Toronto, Berlin, and IDFA. Pamela brings a deep commitment to stories that illuminate the human condition and a track record of shepherding ambitious documentary projects from conception to completion. Her partnership with Kerry Candaele on the Beethoven Hero trilogy reflects her belief in the power of film to connect audiences with the transformative potential of art and music.',
  },
  {
    name: 'Caren McCaleb',
    role: 'Editor & Producer',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/e5eeca13-f29f-4f20-b388-da76947d40fe/caren.jpeg',
    bio: 'Caren McCaleb is an accomplished editor and producer whose work spans documentary film, narrative features, and television. She has edited films that have premiered at festivals worldwide and has received multiple editing awards for her sensitive and skillful storytelling. Her ability to weave together complex narratives — combining archival footage, interviews, musical performances, and observational sequences — has been essential to shaping the emotional arc of the Beethoven Hero trilogy. Caren\'s background in music and her intuitive understanding of rhythm and pacing bring a distinctive musicality to her editing work.',
  },
  {
    name: 'Chris Bottoms',
    role: 'Director of Photography',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/e492cc12-ad7f-476c-a6f7-b420a495fdbf/MV5BZjU5OTZiNmQtMjhjNy00MzZmLTg5Y2UtNGI1N2IxOTg3ODhhXkEyXkFqcGdeQXVyMjMwMjcyMzQ%40._V1_.jpg',
    bio: 'Chris Bottoms is a cinematographer whose work has taken him to more than 40 countries across six continents. His credits include documentary features, television series, and commercial work for major brands and networks. Chris brings a painterly eye and a journalist\'s instinct to his cinematography, capturing both sweeping landscapes and intimate human moments with equal sensitivity. His work on the Beethoven Hero trilogy — from the streets of Santiago to concert halls in Berlin — creates a visual language that honors both the grandeur of Beethoven\'s music and the personal stories of the people who have been touched by it.',
  },
  {
    name: 'Liliam Molina-Cesareo',
    role: 'Assistant Producer',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/5fb66df3-933f-4051-bc57-312a53bfbcf9/1517621488983.jpeg',
    bio: 'Liliam Molina-Cesareo is a bilingual producer and researcher whose expertise in Latin American culture and history has been invaluable to the Beethoven Hero trilogy. Born in Venezuela and raised in the United States, Liliam brings a deep understanding of the political and cultural contexts that shape the stories told in the trilogy, particularly in Love and Justice. Her work includes coordinating filming in Chile, conducting research on the Pinochet era, and facilitating interviews with survivors and activists. Liliam\'s dedication to accuracy and sensitivity has helped ensure that the trilogy tells these difficult stories with the respect and nuance they deserve.',
  },
  {
    name: 'Greg Blake Miller',
    role: 'Assistant Producer',
    image: 'https://images.squarespace-cdn.com/content/v1/652f8f89cec326539e792de6/20aad92f-638c-4f7d-bf1c-8a20c36cd878/asdaw222.jpg',
    bio: 'Greg Blake Miller is a writer, producer, and cultural commentator whose work spans journalism, documentary film, and literary nonfiction. His writing has appeared in the New York Times, the Wall Street Journal, and numerous literary journals. Greg\'s background in music criticism and cultural history brings an intellectual depth to his role on the Beethoven Hero trilogy, where he has contributed to research, script development, and the articulation of the trilogy\'s thematic vision. His deep knowledge of Beethoven\'s life and work has helped ground the films in historical accuracy while allowing them to soar as works of cinematic art.',
  },
];

export default function FilmmakersPage({ navigate }: FilmmakersPageProps) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(https://images.makeitglow.co/projects/beethoven-hero/kerry-in-chile-16x9.jpg)`,
            backgroundPosition: 'center 20%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f1923]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="section-title mb-4">The Team</p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Filmmakers
            </h1>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {filmmakers.map((person, index) => (
              <div
                key={person.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="max-w-sm mx-auto overflow-hidden rounded">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-[#c41e2a] text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    {person.role}
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-light text-white mb-6"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {person.name}
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0a1219]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-title">Explore the Trilogy</p>
          <h2
            className="text-3xl md:text-4xl font-light text-white mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Discover the films
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('following-the-ninth')}
              className="bg-[#1a2633] hover:bg-[#1f2e3f] transition-colors rounded p-6 text-center"
            >
              <p className="text-white text-sm mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Film One</p>
              <p className="text-white/60 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Following the Ninth</p>
            </button>
            <button
              onClick={() => navigate('love-and-justice')}
              className="bg-[#1a2633] hover:bg-[#1f2e3f] transition-colors rounded p-6 text-center"
            >
              <p className="text-white text-sm mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Film Two</p>
              <p className="text-white/60 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Love and Justice</p>
            </button>
            <button
              onClick={() => navigate('last-will')}
              className="bg-[#1a2633] hover:bg-[#1f2e3f] transition-colors rounded p-6 text-center"
            >
              <p className="text-white text-sm mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Film Three</p>
              <p className="text-white/60 text-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Last Will & Testament</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
