"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';


type ProjectData = (typeof projectsData)[number];

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.5
    });
    const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection("Projects");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section ref={ref} className="px-4 scroll-mt-28" id="projects">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
