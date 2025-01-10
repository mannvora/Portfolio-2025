"use client";
import react, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { links } from "@/lib/data";

type ActiveSectionType = typeof links[number]["name"];

type inViewProps = {
    sectionName: ActiveSectionType
}

export function useSectionInView({ sectionName }: inViewProps) {
    const { ref, inView } = useInView({
        threshold:0.75
    });
    const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext();
    
    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    }
}