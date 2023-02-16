import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from '@/typings'

type Props = {
    socials: Social[]
};

function Header({ socials }: Props) {
    return (
        <header className='flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center p-5 sticky top-0'>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className='flex flex-row items-center space-x-3'
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url} />
                ))}
            </motion.div>
            <Link href='#contactMe'>
                <div className='flex flex-row items-center space-x-3 cursor-pointer'>
                    <SocialIcon network="email" />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

                </div>
            </Link>

        </header>
    )
}

export default Header