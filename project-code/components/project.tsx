"use client";

import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

type ProjectData = (typeof projectsData)[number] & {
    githubUrl: string;
    index: number;  // Add index to determine even/odd
};

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    githubUrl,
    index
    }: ProjectData) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
        className='mb-3 sm:mb-8 last:mb-0'
        ref={ref}
        style={{
            scale: scaleProgress,
            opacity: opacityProgress
        }}>
        <Link href={githubUrl} target="_blank" className="block group">
            <section
            className="bg-slate-200 max-w-[42rem] border border-black/5 overflow-hidden relative rounded-lg 
            hover:bg-gray-200 transition cursor-pointer">
            {/* GitHub icon overlay */}
            <div className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                <BsGithub className="w-6 h-6" />
            </div>

            {/* Mobile layout (stacked) */}
            <div className="flex flex-col sm:hidden">
                <div className="w-full h-48 relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className={`object-cover transition group-hover:scale-[1.04]
                    ${isEven ? 'group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2' 
                    : 'group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2'}`}
                    fill
                />
                </div>
                <div className="p-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2">
                    {tags.map((skill, index) => (
                    <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full"
                        key={index}
                    >
                        {skill}
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            {/* Desktop layout (side by side) */}
            <div className="hidden sm:block">
                <div className={`pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[20rem] flex flex-col h-full
                ${!isEven ? 'sm:ml-[20rem]' : ''}`}>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((skill, index) => (
                    <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full"
                        key={index}
                    >
                        {skill}
                    </li>
                    ))}
                </ul>
                </div>
                <Image
                src={imageUrl}
                alt={title}
                quality={95}
                className={`absolute top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04]
                    ${isEven ? 
                    '-right-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2' : 
                    'right-[initial] -left-40 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-2'
                    }`}
                />
            </div>
            </section>
        </Link>
        </motion.div>
    );
}