import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';


type ProjectData = (typeof projectsData)[number];

export default function Projects() {
    return (
        <section className="px-4">
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
