import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, The Name's ${pageInfo?.name}`, "Always a Learner", "Developer", "Creator"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img src={urlFor(pageInfo.heroImage).url()}
                className='relative rounded-full h-40 w-40 mx-auto'
                alt="Picture of the author"

            />
            <div className=''>
                <h2 className='text-sm text-gray-400 uppercase tracking-[8px] pb-2'>{pageInfo?.role}</h2>
                <h1>
                    <span className='text-3xl lg:text-5xl font-semibold font-serif'>{text}</span>
                    <Cursor cursorColor='green' />
                </h1>
            </div>
            <div className='pt-30 z-1000 fixZindex'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
            </div>
        </div>
    )
}