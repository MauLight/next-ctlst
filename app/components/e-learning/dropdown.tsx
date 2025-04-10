'use client'

import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

interface LessonProps {
    id: string
    text: string
    completion: number
}

interface DropdownProps {
    title: string,
    lessons: Array<LessonProps>
    module: number
    theme?: string
}

const containerVariants = {
    initial: { height: 'auto' },
    hover: {
        height: 'auto',
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    },
    exit: { height: 0 }
}

const childVariants = {
    initial: { height: 0, opacity: 0 },
    hover: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
}

export default function Dropdown({ title, lessons, module, theme }: DropdownProps): ReactNode {

    const [hover, setHover] = useState<boolean>(false)
    const router = useRouter()

    return (


        <motion.div
            onHoverStart={() => { setHover(true) }}
            onHoverEnd={() => { setHover(false) }}
            className='group w-full flex flex-col justify-center overflow-hidden gap-y-5 z-20'>

            <div className={`flex w-full justify-between items-center ${theme === 'dark' ? 'text-black' : ''}`}>
                <h1>{title}</h1>
                {
                    hover ? (
                        <ChevronUpIcon className='w-5 h-5' />
                    )
                        :
                        (
                            <ChevronDownIcon className='w-5 h-5' />
                        )
                }
            </div>

            {
                hover && (
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={'container'}
                            variants={containerVariants}
                            initial='initial'
                            animate='hover'
                            exit='exit'
                            className='w-full flex flex-col justify-center overflow-hidden gap-y-3'>
                            {
                                lessons.map((lesson, i) => (
                                    <motion.button
                                        onClick={() => { router.push(`/courses/the-quest/module${module}/${i + 1}`) }}
                                        key={lesson.id}
                                        variants={childVariants}
                                        className='flex justify-start items-center gap-x-2 text-text-secondary hover:text-sky-400 cursor-pointer'>
                                        <div className={`w-7 h-7 flex justify-center items-center shrink-0 rounded-full border border-border text-[0.8rem] ${theme === 'dark' ? 'text-black' : ''}`}>
                                            {i + 1}
                                        </div>
                                        <p className={theme === 'dark' ? 'text-black text-start' : 'text-start'}>{lesson.text}</p>
                                    </motion.button>
                                ))
                            }
                        </motion.div>
                    </AnimatePresence>
                )
            }

        </motion.div>

    )
}
