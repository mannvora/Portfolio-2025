"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold:0.75
  });
  const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if(inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section ref={ref} className="flex flex-col items-center justify-center max-w-[45rem] mx-auto px-4 sm:px-6 mb-28 sm:mb-40 scroll-mt-28" id="about"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175 }}>
      <SectionHeading>About Me</SectionHeading>
      <div className="text-center space-y-4 mt-6 leading-8">
        <p>
          My journey in coding began after completing{' '}
          <span className="font-medium">high-school</span> in 2019. I was always
          curious in this area and wanted to understand how technology truly works.
          I have 1 year of work experience as a software developer and completed
          two technical internships where I tackled exciting challenges like{' '}
          <span className="font-medium">building scalable systems</span>,{' '}
          <span className="font-medium">optimizing performance</span>, and{' '}
          <span className="font-medium">streamlining workflows</span>.
        </p>

        <p>
          I have completed my{' '}
          <span className="font-medium">Bachelor's in Computer Engineering</span>{' '}
          from{' '}
          <span className="font-medium">Gujarat Technological University.</span>{' '}
          Currently, I'm pursuing a{' '}
          <span className="font-medium">Master's in Computer Science</span>, diving
          deeper into the world of advanced algorithms, cloud computing, and
          full-stack development.{' '}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of solving a challenging problem and bringing a solution to life.
          I'm always eager to explore new technologies. I am currently looking for a{' '}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy workout,
          watching movies and listening to music. I also love playing{' '}
          <span className="font-medium">chess</span>, which helps me sharpen my
          strategic thinking. I am always curious and open to exploring new hobbies
          and skills to keep life exciting and balanced.
        </p>
      </div>
    </motion.section>
  );
}