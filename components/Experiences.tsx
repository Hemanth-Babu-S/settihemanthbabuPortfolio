
import { Experience } from '@/typings';
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {
  experiences: Experience[];
}

export default function Experiences({ experiences }: Props) {
  return (
    <div
      className='h-screen flex flex-col justify-evenly items-center relative
        text-left md:flex-row max-w-full mx-auto overflow-hidden px-10'
    >
      <h3 className='absolute top-24 text-2xl text-gray-500 tracking-[13px] uppercase'>Experience</h3>
      <div className='flex w-full space-x-5 snap-x snap-mandatory p-10 overflow-x-scroll mt-10
         scrollbar-track-gray-500/20 scrollbar-thumb-green-500/80 scrollbar-thin'>
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>

    </div>
  )
}