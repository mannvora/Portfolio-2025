"use client";

import React, { useState, createContext, useContext } from 'react'
import { links } from "@/lib/data";

type ActiveSectionType = typeof links[number]["name"];

type ActiveSectionContextType = {
    activeSection: ActiveSectionType,
    setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionType>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: {
    children: React.ReactNode
}) {
    const [activeSection, setActiveSection] = useState<ActiveSectionType>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error("useActiveSectionContext must be provided within an ActiveSectionContextProvider");
    }

    return context;
}
