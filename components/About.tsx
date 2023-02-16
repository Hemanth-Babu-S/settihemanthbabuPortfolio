import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../public/profilePic1.jpg'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
    return (
        <div
            className='flex flex-col justify-evenly items-center relative h-screen text-center md:text-left md:flex-row max-w-6xl mx-auto px-10'
        >
            <h3 className='absolute top-24 text-2xl text-gray-500 tracking-[13px] uppercase'>About</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                }}
                src={urlFor(pageInfo.profilePic).url()}
                alt=""
                className='w-56 h-56 rounded-full -mb-20 md:mb-0 flex-shrink-0 md:w-30 md:h-47 md:rounded-2xl xl:w-[300px] xl:h-[400px]'
            />
            <div className='space-y-5 px-0 md:px-10 text-left'>
                <div >
                    <h3 className='text-2xl font-extrabold '>About Me</h3>
                </div>
                <p className='font-mono'>{pageInfo?.backgroundInformation} </p>
            </div>
        </div>
    )
}

export default About