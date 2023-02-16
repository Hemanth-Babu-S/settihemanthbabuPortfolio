import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {
    //const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col text-center relative max-w-[2000px] mx-auto
        justify-center items-center md:text-left xl:flex-row xl:px-10 xl:space-y-0 
    '>
            <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>Projects</h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-track-gray-500/20 scrollbar-thumb-green-500/80 scrollbar-thin'>
                {projects.map((project, i) => (
                    <div key={project._id}
                        className='w-screen flex flex-shrink-0 snap-center flex-col space-y-5
                items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}

                            src={urlFor(project?.image).url()}
                            alt=''
                            className='border border-gray-500 object-cover
            w-24 h-24 md:w-28 md:h-28 xl:w-64 xl:h-96
            transition duration-300 ease-in-out'
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-orange-300'>
                                    Case Study{i + 1} of {projects.length}:</span> {project.title}
                            </h4>
                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map((technology) => (
                                    <img
                                        className='h-10 w-10'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>
                            <p className='text-center md:text-left'>{project.summary}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-green-400 left-0 h-[350px] -skew-y-12' />


        </motion.div>
    )
}

export default Projects