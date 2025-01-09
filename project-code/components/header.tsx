"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 
      shadow-lgshadow-black/[0.03] backdrop-blur-[18rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
      initial={{x: "-50%", y: -100, opacity: 0}}
      animate={{x: "-50%", y: 0, opacity: 1}}
      >
      </motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[09.rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
        {
          links.map((val) => (
            <motion.li className="h-3/4 flex items-center justify-center relative" key={val.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            >
              <Link
              onClick={() => {
                setActiveSection(val.name)
                setTimeOfLastClick(Date.now())
              }}
              className={clsx("flex w-full items-center justify-center px-2 py-2 hover:text-gray-950 transition", {
                "text-gray-950": activeSection === val.name
              })} href={val.hash
              }>
              {val.name}
              {val.name === activeSection && (
                <motion.span className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                layoutId="activeSection"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30
                }}>
                </motion.span>
              )}
              </Link>
            </motion.li>
          ))
        }
        </ul>
      </nav>
    </header>
  )
}
