'use client'

import React from 'react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

export default function CourseButton() {

    const router = useRouter()

    return (
        <motion.button
            onClick={() => { router.push('/courses/the-quest') }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.1, type: 'spring', bounce: 0.2 }}
            className='w-[120px] rounded-full h-12 bg-black text-[#ededed] hover:text-sky-400 transition-color duration-300 cursor-pointer'>Start</motion.button>
    )
}
