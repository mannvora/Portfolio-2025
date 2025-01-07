import React from 'react';
import SectionHeading from './section-heading';

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center max-w-[45rem] mx-auto px-4 sm:px-6 mb-28 sm:mb-40">
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
    </section>
  );
}