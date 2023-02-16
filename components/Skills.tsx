import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings'

type Props = {
  skills: SkillType[];
  directionLeft?: boolean;
}

function Skills({ skills }: Props) {
  return (
    <div className='min-h-screen flex flex-col text-center relative max-w-[2000px] mx-auto
    justify-center items-center md:text-left xl:flex-row xl:px-10 xl:space-y-0 
    '>
      <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>Skills</h3>
      <h3
        className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'
      >Hover over a skill for current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5 absolute top-48'>
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft/>
        ))}

      </div>
    </div>
  )
}

export default Skills