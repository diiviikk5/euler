import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { WordsPullUp, WordsPullUpMultiStyle, ScrollRevealParagraph } from './components/AnimationComponents';

function App() {
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const isFeaturesInView = useInView(featuresSectionRef, { once: true, margin: '-100px' });

  // Navigation click helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Grid container variants for staggered card entrance
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Individual card variants (scale from 0.95 + fade in, ease [0.22, 1, 0.36, 1])
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
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
                { name: 'Essays', id: 'features' },
                { name: 'Shorts', id: 'features' },
                { name: 'Thoughts', id: 'features' },
                { name: 'Archive', id: 'features' },
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
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[#DEDBC8]/70 text-xs sm:text-sm md:text-base leading-[1.2] font-light tracking-wide text-left"
                >
                  Euler is a personal sanctuary for deep thoughts, essays, and creative writing—an intellectual repository bound not by conventions, but by curiosity and a hunger to explore ideas through unique perspectives.
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollToSection('about')}
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
      <section id="about" className="py-20 md:py-32 px-4 md:px-6 bg-black flex justify-center border-y border-white/5">
        <div className="bg-[#101010] rounded-[2rem] p-8 md:p-20 text-center max-w-6xl w-full border border-white/5 relative overflow-hidden">
          {/* Subtle noise background on the card */}
          <div className="bg-noise absolute inset-0 opacity-[0.05] pointer-events-none" />

          {/* Small Label */}
          <span className="text-[#DEDBC8] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 block font-medium">
            Selected Writing
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

      {/* SECTION 3: FEATURES */}
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
            variants={gridVariants}
            initial="hidden"
            animate={isFeaturesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:h-[480px] w-full"
          >

            {/* Card 1 - Video Card */}
            <motion.div
              variants={cardVariants}
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
              variants={cardVariants}
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
              variants={cardVariants}
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
              variants={cardVariants}
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
