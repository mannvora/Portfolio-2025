"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
    const { ref } = useSectionInView({sectionName: 'Contact'});

    return (
        <motion.section ref={ref} id="contact" className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700 -mt-3'>Please contact me directly at{" "} 
                <a className='underline' href='mailto:mannvora19683@gmail.com'>mannvora19683@gmail.com</a>
            {" "}or through this form.</p>
            <form className='mt-10 flex flex-col' action={async formData => {
                console.log(formData);
                await sendEmail(formData)
            }}>
                <input name='senderEmail' required maxLength={500} className='h-14 rounded-lg border border-black/30 px-4' placeholder='Your email' type='email'/>
                <textarea name='senderMessage' required maxLength={500} className='h-52 my-3 rounded-lg border border-black/30 p-4' placeholder='Your message'/>
                <button type='submit' className=' group flex h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all 
                justify-center items-center gap-2 focus:scale-110 hover:scale-110 active:scale-105'>
                    Submit 
                    <FaPaperPlane className='opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/> 
                </button>
            </form>
        </motion.section>
    )
    }
