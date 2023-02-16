import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        animate={{
            scale:[1, 2, 3, 1],
            opacity:[0.1, 0.2, 0.4, 0.8, 1.0],
            borderRadius:["20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration:2.5,
        }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-red-500 rounded-full  h-[100px] w-[100px] mt-60 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full  h-[300px] w-[300px] mt-60 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full  h-[300px] w-[300px] mt-60 animate-ping'/>
        <div className='absolute border border-red-500 rounded-full  h-[500px] w-[500px] mt-60 animate-ping'/>
    </motion.div>
    
  )
}

export default BackgroundCircles