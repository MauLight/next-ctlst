'use client'

import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

//import LessonsIndex from '../e-learning/lessons-index'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import LessonsIndexClient from '../e-learning/lessons-index-client'

export default function SideMenu(): ReactNode {

    const [hidden, setHidden] = useState<boolean>(true)

    return (
        <motion.div
            initial={{ x: hidden ? -350 : 0 }}
            animate={{ x: hidden ? -350 : 0 }}
            transition={{ duration: 0.2, type: 'spring', stiffness: 90, damping: 30, restDelta: 0.01 }}
            className="fixed top-20 h-full w-[350px] bg-sky-500 rounded-r-[25px] px-6 py-20 z-50">
            <LessonsIndexClient theme="dark" />
            <button onClick={() => { setHidden(!hidden) }} className='absolute -right-6 top-100 h-[100px] px-1 border border-sky-500 rounded-r-[15px]'>
                {
                    hidden ? (
                        <ArrowRightIcon className='w-4 h-4' />
                    )
                        :
                        (
                            <ArrowLeftIcon className='w-4 h-4' />
                        )
                }
            </button>
        </motion.div>
    )
}
