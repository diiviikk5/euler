import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Calendar, Clock, BookOpen, Star, Sparkles } from 'lucide-react';
import { WordsPullUp, WordsPullUpMultiStyle, ScrollRevealParagraph } from './components/AnimationComponents';

// Import custom generated image assets
import interstellarImg from './assets/media/interstellar.png';
import bladerunnerImg from './assets/media/bladerunner.png';
import eldenringImg from './assets/media/eldenring.png';
import witcherImg from './assets/media/witcher.png';

function App() {
  const writingsSectionRef = useRef<HTMLDivElement>(null);
  const thoughtsSectionRef = useRef<HTMLDivElement>(null);
  const moviesSectionRef = useRef<HTMLDivElement>(null);
  const gamesSectionRef = useRef<HTMLDivElement>(null);
  const featuresSectionRef = useRef<HTMLDivElement>(null);

  const isWritingsInView = useInView(writingsSectionRef, { once: true, margin: '-100px' });
  const isThoughtsInView = useInView(thoughtsSectionRef, { once: true, margin: '-100px' });
  const isMoviesInView = useInView(moviesSectionRef, { once: true, margin: '-100px' });
  const isGamesInView = useInView(gamesSectionRef, { once: true, margin: '-100px' });
  const isFeaturesInView = useInView(featuresSectionRef, { once: true, margin: '-100px' });

  // Navigation click helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Stagger variants
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const mediaCardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div className="bg-black text-[#E1E0CC] min-h-screen relative selection:bg-[#DEDBC8] selection:text-black">
      
      {/* SECTION 1: HERO */}
      <section id="hero" className="h-screen w-full p-4 md:p-6 relative">
        <div className="w-full h-full relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-neutral-900">
          
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
              type="video/mp4"
            />
          </video>

          {/* Noise Overlay */}
          <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

          {/* Navbar */}
          <nav className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8 py-3 z-50 flex items-center justify-center border-x border-b border-white/5">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {[
                { name: 'Writings', id: 'writings' },
                { name: 'Thoughts', id: 'thoughts' },
                { name: 'Movies', id: 'movies' },
                { name: 'Games', id: 'games' },
                { name: 'About', id: 'about' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                    className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase hover:text-[#E1E0CC] transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hero Content (bottom-aligned) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 pb-10 md:pb-16 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-7xl mx-auto">
              
              {/* Giant Heading */}
              <div className="lg:col-span-8 flex justify-start">
                <WordsPullUp
                  text="Euler"
                  showAsterisk={true}
                  className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] text-[#E1E0CC]"
                />
              </div>

              {/* Tagline & CTA */}
              <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:pl-6">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className="text-[#DEDBC8]/70 text-xs sm:text-sm md:text-base leading-[1.2] font-light tracking-wide text-left"
                >
                  Euler is a personal sanctuary for deep thoughts, essays, and creative writing—an intellectual repository bound not by conventions, but by curiosity and a hunger to explore ideas through unique perspectives.
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  onClick={() => scrollToSection('writings')}
                  className="flex items-center gap-2 bg-[#DEDBC8] hover:gap-3 text-black font-medium text-xs sm:text-sm md:text-base rounded-full pl-5 pr-2 py-2 transition-all duration-300 group shadow-lg shadow-black/20"
                >
                  <span>Enter the archive</span>
                  <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                    <ArrowRight className="text-[#DEDBC8] w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </motion.button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section id="about" className="py-20 md:py-32 px-4 md:px-6 bg-black flex justify-center border-b border-white/5">
        <div className="bg-[#101010] rounded-[2rem] p-8 md:p-20 text-center max-w-6xl w-full border border-white/5 relative overflow-hidden">
          {/* Subtle noise background on the card */}
          <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none" />

          {/* Small Label */}
          <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 block font-medium">
            The Author
          </span>

          {/* Heading */}
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Divik, ', className: 'text-[#E1E0CC] font-normal' },
              { text: 'a self-taught thinker & writer. ', className: 'text-[#DEDBC8] italic font-serif' },
              { text: 'I write about technology, philosophy, design, and the human experience.', className: 'text-[#E1E0CC] font-normal' }
            ]}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9] tracking-tight mb-12"
          />

          {/* Scroll reveal body paragraph */}
          <ScrollRevealParagraph
            text="Over the last few years, I have documented my thoughts, essays, and creative journeys. This digital garden serves as a public archive of ideas, capturing everything from raw, late-night reflections to fully-realized essays that attempt to make sense of our complex world."
            className="text-[#DEDBC8] text-sm sm:text-base md:text-lg max-w-3xl mx-auto mt-8 leading-relaxed font-light"
          />
        </div>
      </section>

      {/* SECTION 3: WRITINGS */}
      <section id="writings" className="py-20 md:py-32 px-4 md:px-6 bg-black border-b border-white/5 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          
          <div className="mb-12 md:mb-16">
            <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.2em] uppercase block font-medium mb-3">
              Long-Form Papers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Writings.
            </h2>
          </div>

          <motion.div
            ref={writingsSectionRef}
            variants={listVariants}
            initial="hidden"
            animate={isWritingsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full"
          >
            {[
              {
                date: 'Oct 2025',
                category: 'Tech & Philosophy',
                readTime: '6 min read',
                title: 'The Ghost in the Machine: AI and the Search for Meaning',
                description: 'An inquiry into the nature of consciousness, large language models, and what it means to be a creator in the age of automation.'
              },
              {
                date: 'Dec 2025',
                category: 'Design & Society',
                readTime: '4 min read',
                title: 'Designing for Rest: The Aesthetics of Minimalist Interfaces',
                description: 'How screen saturation dictates our attention span, and the critical role digital quietness plays in modern user experiences.'
              },
              {
                date: 'Feb 2026',
                category: 'Literature & Film',
                readTime: '8 min read',
                title: 'Staring into the Abyss: Cosmic Pessimism in Modern Sci-Fi',
                description: 'An analysis of existential dread, space exploration narratives, and how science fiction reflects our deepest psychological fears.'
              }
            ].map((essay, idx) => (
              <motion.article
                key={idx}
                variants={cardVariants}
                className="bg-[#101010] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-[#DEDBC8]/20 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-4 text-[10px] sm:text-xs text-[#DEDBC8]/60 mb-6 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {essay.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {essay.readTime}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#DEDBC8] uppercase tracking-wider block mb-3">
                    {essay.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-normal text-[#E1E0CC] leading-tight mb-4 group-hover:text-[#DEDBC8] transition-colors duration-200">
                    {essay.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {essay.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[#DEDBC8] text-xs sm:text-sm font-medium hover:underline cursor-pointer group-hover:gap-2 transition-all duration-200 w-fit pt-4">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>Read article</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THOUGHTS */}
      <section id="thoughts" className="py-20 md:py-32 px-4 md:px-6 bg-black border-b border-white/5 flex flex-col items-center relative">
        <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none" />
        
        <div className="w-full max-w-4xl relative z-10">
          
          <div className="mb-12 md:mb-16 text-center">
            <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.2em] uppercase block font-medium mb-3">
              Stream of Consciousness
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Thoughts.
            </h2>
          </div>

          <motion.div
            ref={thoughtsSectionRef}
            variants={listVariants}
            initial="hidden"
            animate={isThoughtsInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8 w-full border-l border-white/10 pl-6 md:pl-8 ml-2 md:ml-4"
          >
            {[
              {
                date: 'June 08, 2026',
                content: 'Late night refactoring is a trap. Sleep is the best debugger. Wrote 3 lines of code in 5 minutes today that fixed a bug I spent 4 hours on last night. Let the unconscious mind run in the background.'
              },
              {
                date: 'May 22, 2026',
                content: "Just finished reading Hofstadter's 'Gödel, Escher, Bach'. The recursive loops of consciousness are mesmerizing. High recommend to anyone interested in cognitive science, mathematics, or code structure."
              },
              {
                date: 'May 05, 2026',
                content: 'Simplicity is not the absence of clutter, but the presence of clarity. This applies to writing, interface design, code architecture, and life alike. Reduce to the essential, discard the secondary.'
              }
            ].map((thought, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] md:-left-[41px] top-1.5 bg-[#DEDBC8] rounded-full w-2.5 h-2.5 md:w-3.5 md:h-3.5 border-4 border-black group-hover:scale-125 group-hover:bg-[#E1E0CC] transition-all duration-300" />

                <span className="text-[10px] sm:text-xs text-[#DEDBC8]/50 font-mono block mb-2">
                  {thought.date}
                </span>

                <div className="bg-[#101010] border border-white/5 rounded-2xl p-6 hover:border-[#DEDBC8]/10 transition-all duration-300">
                  <p className="text-[#E1E0CC] text-xs sm:text-sm md:text-base leading-relaxed font-light font-sans whitespace-pre-line italic">
                    "{thought.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: FAVORITE MOVIES */}
      <section id="movies" className="py-20 md:py-32 px-4 md:px-6 bg-black border-b border-white/5 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          
          <div className="mb-12 md:mb-16">
            <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.2em] uppercase block font-medium mb-3">
              Cinematic Masterpieces
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Favorite Movies.
            </h2>
          </div>

          <motion.div
            ref={moviesSectionRef}
            variants={listVariants}
            initial="hidden"
            animate={isMoviesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {[
              {
                title: 'Interstellar',
                year: '2014',
                genre: 'Sci-Fi / Drama',
                rating: '9.8/10',
                image: interstellarImg,
                comment: "A breathtaking masterpiece that marries physics and poetry. Hans Zimmer's organ-heavy score creates an unparalleled sense of cosmic scale and emotional intimacy."
              },
              {
                title: 'Blade Runner 2049',
                year: '2017',
                genre: 'Cyberpunk / Neo-Noir',
                rating: '9.6/10',
                image: bladerunnerImg,
                comment: "Denis Villeneuve's visual design is a masterclass in scale and atmosphere. Every frame is a perfect painting exploring memory, humanity, and artificial souls."
              }
            ].map((movie, idx) => (
              <motion.div
                key={idx}
                variants={mediaCardVariants}
                className="bg-[#101010] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] hover:border-[#DEDBC8]/20 transition-all duration-300 group"
              >
                {/* Poster Cover */}
                <div className="w-full md:w-[220px] h-[240px] md:h-full overflow-hidden shrink-0 relative">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent md:hidden" />
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-normal text-[#E1E0CC] mb-1">
                          {movie.title}
                        </h3>
                        <span className="text-[#DEDBC8]/60 text-xs font-mono">
                          {movie.year} • {movie.genre}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-[#DEDBC8]/10 text-[#DEDBC8] px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{movie.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {movie.comment}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#DEDBC8]/80 font-mono mt-2 select-none">
                    <Sparkles className="w-3.5 h-3.5 text-[#DEDBC8]" />
                    <span>Highly Recommended</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: FAVORITE GAMES */}
      <section id="games" className="py-20 md:py-32 px-4 md:px-6 bg-black border-b border-white/5 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          
          <div className="mb-12 md:mb-16">
            <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.2em] uppercase block font-medium mb-3">
              Interactive Worlds
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#E1E0CC]">
              Favorite Games.
            </h2>
          </div>

          <motion.div
            ref={gamesSectionRef}
            variants={listVariants}
            initial="hidden"
            animate={isGamesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          >
            {[
              {
                title: 'Elden Ring',
                developer: 'FromSoftware',
                year: '2022',
                rating: '9.9/10',
                image: eldenringImg,
                comment: "An absolute triumph in world design and player freedom. The Lands Between feel mysterious, dangerous, and incredibly rewarding to explore on foot."
              },
              {
                title: 'The Witcher 3: Wild Hunt',
                developer: 'CD Projekt Red',
                year: '2015',
                rating: '9.7/10',
                image: witcherImg,
                comment: "The gold standard for narrative role-playing. Every side quest has the emotional weight of a main storyline, set in a beautifully realized grim fantasy world."
              }
            ].map((game, idx) => (
              <motion.div
                key={idx}
                variants={mediaCardVariants}
                className="bg-[#101010] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-auto md:h-[320px] hover:border-[#DEDBC8]/20 transition-all duration-300 group"
              >
                {/* Cover Art */}
                <div className="w-full md:w-[220px] h-[240px] md:h-full overflow-hidden shrink-0 relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent md:hidden" />
                </div>

                {/* Details */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-normal text-[#E1E0CC] mb-1">
                          {game.title}
                        </h3>
                        <span className="text-[#DEDBC8]/60 text-xs font-mono">
                          {game.developer} • {game.year}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1 bg-[#DEDBC8]/10 text-[#DEDBC8] px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold">
                        <Star className="w-3 h-3 fill-current" />
                        <span>{game.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                      {game.comment}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#DEDBC8]/80 font-mono mt-2 select-none">
                    <Sparkles className="w-3.5 h-3.5 text-[#DEDBC8]" />
                    <span>Highly Recommended</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: FEATURES */}
      <section id="features" className="min-h-screen bg-black py-20 md:py-32 px-4 md:px-6 relative flex flex-col justify-center items-center">
        
        {/* Subtle Background Noise */}
        <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

        <div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
          
          {/* Header Text */}
          <div className="text-center mb-16 md:mb-24">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'A curated space for ideas and stories. ', className: 'text-[#E1E0CC]' },
                { text: 'Built for clarity. Powered by words.', className: 'text-gray-500 block mt-2' }
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal tracking-wide max-w-2xl mx-auto"
            />
          </div>

          {/* 4-column card grid */}
          <motion.div
            ref={featuresSectionRef}
            variants={listVariants}
            initial="hidden"
            animate={isFeaturesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[480px] w-full"
          >

            {/* Card 1 - Video Card */}
            <motion.div
              variants={mediaCardVariants}
              className="relative rounded-2xl overflow-hidden h-[300px] lg:h-full flex flex-col justify-end p-6 md:p-8 bg-[#212121] border border-white/5 group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              >
                <source
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              <h3 className="text-[#E1E0CC] font-medium text-lg md:text-xl relative z-10 tracking-wide">
                A window into my thoughts.
              </h3>
            </motion.div>

            {/* Card 2 - Deep Essays */}
            <motion.div
              variants={mediaCardVariants}
              className="rounded-2xl p-6 md:p-8 bg-[#212121] border border-white/5 flex flex-col justify-between h-[380px] lg:h-full group hover:border-[#DEDBC8]/30 transition-all duration-300"
            >
              <div>
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Deep Essays Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6 border border-white/10"
                />
                
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] tracking-wide">
                    Deep Essays
                  </h3>
                  <span className="text-[#DEDBC8]/50 text-xs sm:text-sm font-mono mt-1">
                    01
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {[
                    'Long-form tech & philosophy articles',
                    'Detailed case studies & research',
                    'Curated references & reading lists',
                    'Full Markdown-supported layout'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <Check className="text-[#DEDBC8] w-4 h-4 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-[#DEDBC8] text-xs sm:text-sm font-medium hover:underline cursor-pointer pt-4 w-fit">
                <span>Explore essays</span>
                <ArrowRight className="-rotate-45 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>

            {/* Card 3 - Short Thoughts */}
            <motion.div
              variants={mediaCardVariants}
              className="rounded-2xl p-6 md:p-8 bg-[#212121] border border-white/5 flex flex-col justify-between h-[380px] lg:h-full group hover:border-[#DEDBC8]/30 transition-all duration-300"
            >
              <div>
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Short Thoughts Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6 border border-white/10"
                />

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] tracking-wide">
                    Short Thoughts
                  </h3>
                  <span className="text-[#DEDBC8]/50 text-xs sm:text-sm font-mono mt-1">
                    02
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {[
                    'Daily observations and takeaways',
                    'Quick summaries of books & papers',
                    'Interactive thought snippets'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <Check className="text-[#DEDBC8] w-4 h-4 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-[#DEDBC8] text-xs sm:text-sm font-medium hover:underline cursor-pointer pt-4 w-fit">
                <span>Browse thoughts</span>
                <ArrowRight className="-rotate-45 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>

            {/* Card 4 - Creative Writing */}
            <motion.div
              variants={mediaCardVariants}
              className="rounded-2xl p-6 md:p-8 bg-[#212121] border border-white/5 flex flex-col justify-between h-[380px] lg:h-full group hover:border-[#DEDBC8]/30 transition-all duration-300"
            >
              <div>
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="Creative Writing Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover mb-6 border border-white/10"
                />

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] tracking-wide">
                    Creative Writing
                  </h3>
                  <span className="text-[#DEDBC8]/50 text-xs sm:text-sm font-mono mt-1">
                    03
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {[
                    'Speculative fiction & short stories',
                    'Narrative prose & style sketches',
                    'Poetic reflections & journals'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <Check className="text-[#DEDBC8] w-4 h-4 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-1.5 text-[#DEDBC8] text-xs sm:text-sm font-medium hover:underline cursor-pointer pt-4 w-fit">
                <span>Read stories</span>
                <ArrowRight className="-rotate-45 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-[10px] sm:text-xs text-gray-600 border-t border-white/5 relative z-10 font-mono">
        &copy; {new Date().getFullYear()} Euler // Divik. Built with passion.
      </footer>

    </div>
  );
}

export default App;
