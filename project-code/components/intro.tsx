"use client";

import React from 'react'
import Image from 'next/image'
import photo from "@/public/photo2.jpeg"
import { motion } from "framer-motion"

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
        <p className='mb-10 mt-4 pt-8 translate-x-11 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
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
        </p>
    </section>
  )
}
