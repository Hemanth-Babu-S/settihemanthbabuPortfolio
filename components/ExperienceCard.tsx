import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    experience: Experience;
}

export default function ({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-5 flex-shrink-0
    w-[500px] mt-10 xl:py-3 md:w-[600px] xl:w-[900px] box bg-gray-100 border border-gray-500 p-3
    snap-center opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden
    '>
            <motion.img
                initial={{
                    y: 100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(experience?.companyImage).url()}
                alt=""
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-center'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light'>{experience.jobTitle}</h4>
                <p className='text-2xl font-semibold mt-1 uppercase'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=""
                            className='w-10 h-10 rounded-full'
                        />
                    ))}

                </div>
                <p className='uppercase py-3 text-gray-500'>{new Date(experience.dateStarted).toDateString()}-
                    {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()} </p>

                <ul className='list-disc space-y-2 ml-5 text-lg'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}