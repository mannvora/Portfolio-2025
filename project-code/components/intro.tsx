"use client";

import React from 'react'
import Image from 'next/image'
import photo from "@/public/photo2.jpeg"
import { motion } from "framer-motion"
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] border-gray-950'>
        <div className='flex items-center justify-center border-gray-900'>
            <div className='relative'>
                <motion.div 
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                    type: "tween",
                    duration: 0.30
                }}>
                    <Image className='h-52 w-52 rounded-full border-[0.35rem] border-white object-cover shadow' 
                    src={photo} alt="Mann's Portrait" width={192} height={192} quality={95} priority={true}></Image>
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-5xl translate-x-4'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
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
        <motion.p className='text-center mt-10 mb-4 pt-8 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7
        }}>
            <span className='font-bold'>Hello, I am Mann Vora. </span>
            I'm a {" "}
            <span className='font-bold'>Full Stack Developer </span>
            with {" "}
            <span className='font-bold'>1 years </span>
            of experience. I enjoy building{" "}
            <span className='italic'>sites and applications. </span>
            My focus is {" "}
            <span className='underline'>Backend </span>
            and {" "}
            <span className='underline'>DevOps.</span>
        </motion.p>

        <motion.div className='flex flex-col sm:flex-row items-center gap-4 pt-14 justify-center'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            type: "spring",
            stiffness: 125,
            delay: 0.1,
            duration: 0.7
        }}>
            <Link href="#contact" className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full'>Contact me here <BsArrowRight/></Link>
            <a className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'> DOWNLOAD CV <HiDownload/></a>
            <a className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full'><BsLinkedin/></a>
            <a className='bg-white  p-4 text-gray-700 flex items-center gap-2 rounded-full'><BsGithub/></a>
        </motion.div>
    </section>
  )
}
