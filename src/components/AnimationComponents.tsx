import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, MotionValue } from 'framer-motion';

// WordsPullUp component
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
}

export const WordsPullUp = ({ text, className = '', showAsterisk = false }: WordsPullUpProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, idx) => {
        const isLast = idx === words.length - 1;
        if (isLast && showAsterisk) {
          // If showAsterisk is true and it's the last word, append asterisk with superscript styling
          return (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="relative inline-block mr-[0.2em] last:mr-0"
            >
              {word}
              <span className="absolute top-[0.65em] -right-[0.35em] text-[0.31em] select-none font-sans font-light">
                *
              </span>
            </motion.span>
          );
        }
        return (
          <motion.span
            key={idx}
            variants={wordVariants}
            className="inline-block mr-[0.2em] last:mr-0"
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

// WordsPullUpMultiStyle component
interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export const WordsPullUpMultiStyle = ({ segments, className = '' }: WordsPullUpMultiStyleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Flatten segments into individual words while retaining their index and className
  const words: { word: string; className: string }[] = [];
  segments.forEach((segment) => {
    const segmentWords = segment.text.split(' ');
    segmentWords.forEach((word) => {
      if (word) {
        words.push({
          word,
          className: segment.className || '',
        });
      }
    });
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((item, idx) => (
        <motion.span
          key={idx}
          variants={wordVariants}
          className={`inline-block mr-[0.25em] last:mr-0 ${item.className}`}
        >
          {item.word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// AnimatedLetter component
interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  progress: MotionValue<number>;
}

export const AnimatedLetter = ({ char, index, totalChars, progress }: AnimatedLetterProps) => {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
};

// ScrollRevealParagraph component
interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
}

export const ScrollRevealParagraph = ({ text, className = '' }: ScrollRevealParagraphProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  
  // Calculate total characters to determine indexes
  let charCounter = 0;
  const totalChars = text.length;

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center`}>
      {words.map((word, wordIdx) => {
        const chars = word.split('');
        const renderedWord = (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em] last:mr-0">
            {chars.map((char) => {
              const globalIdx = charCounter++;
              return (
                <AnimatedLetter
                  key={globalIdx}
                  char={char}
                  index={globalIdx}
                  totalChars={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
        // Increment for the space character between words
        charCounter++;
        return renderedWord;
      })}
    </p>
  );
};
