"use client";

import React from 'react';
import Image from 'next/image';
import photo from "@/public/photo2.jpeg";
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
    return (
        <section className='max-w-[50rem] mx-auto px-4 py-8 mb-28 scroll-mt-[100rem]' id="home">
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        type: "tween",
                        duration: 0.30
                        }}>
                        <Image
                        className='h-52 w-52 rounded-full border-[0.35rem] border-white object-cover shadow'
                        src={photo}
                        alt="Mann's Portrait"
                        width={192}
                        height={192}
                        quality={95}
                        priority={true}
                        />
                    </motion.div>
                    <motion.span
                        className='absolute bottom-0 right-0 text-5xl translate-x-4'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7
                        }}>
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.div
                className='max-w-[45rem] mx-auto text-center'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7
                }}>
                    <h1 className='mt-8 mb-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
                        <span className='font-bold'>Hello, I am Mann Vora. </span>
                        I'm a{" "}
                        <span className='font-bold'>Full Stack Developer </span>
                        with{" "}
                        <span className='font-bold'>1 year </span>
                        of experience. I enjoy building{" "}
                        <span className='italic'>sites and applications. </span>
                        My focus is{" "}
                        <span className='underline'>Backend </span>
                        and{" "}
                        <span className='underline'>DevOps.</span>
                    </h1>
            </motion.div>

            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7
                }}>
                <Link
                href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                Contact me here
                <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/14'
                href='/CV.pdf'
                download>
                DOWNLOAD CV
                <HiDownload className='opacity-70 group-hover:translate-y-1 transition' />
                </a>

                <a
                className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                hover:text-gray-950 transition cursor-pointer border border-black/14'
                href='https://www.linkedin.com/in/mannvora/'
                target="_blank">
                <BsLinkedin />
                </a>

                <a
                className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
                hover:text-gray-950 transition cursor-pointer border border-black/14'
                href='https://github.com/mannvora'
                target='_blank'>
                <BsGithub />
                </a>
            </motion.div>
        </section>
    );
}