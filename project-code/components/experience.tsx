"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { VerticalElement } from "@/components/vertical-element";

export default function Experience() {
    const { ref } = useSectionInView({ sectionName: "Experience"});
    return (
        <section id="experience" ref={ref} className="mb-28 scroll-mt-28 sm:mb-40">
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="gray">
            {experiencesData.map((item, index) => {
            return (
                <React.Fragment key={index}>
                <VerticalElement
                    title={item.title}
                    location={item.location}
                    description={item.description}
                    date={item.date}
                    icon={item.icon}
                />
                </React.Fragment>
            );
            })}
        </VerticalTimeline>
        </section>
    );
}