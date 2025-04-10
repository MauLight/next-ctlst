'use client'

import { useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import ComponentWrapper from '../common/component-wrapper'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

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

const lessons = [
    {
        id: 'a1',
        text: 'What is a screenwriter?',
        completion: 90
    },
    {
        id: 'b2',
        text: 'About the movie industry.',
        completion: 90
    },
    {
        id: 'c3',
        text: 'Is this course for you?',
        completion: 90
    },
]

export default function Dropdown(): ReactNode {

    const [hover, setHover] = useState<boolean>(false)

    return (
        <ComponentWrapper>

            <motion.div
                onHoverStart={() => { setHover(true) }}
                onHoverEnd={() => { setHover(false) }}
                className='group w-full flex flex-col justify-center overflow-hidden gap-y-5'>

                <div className="flex w-full justify-between items-center">
                    <h1>Course Introduction</h1>
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
                                        <motion.div
                                            key={lesson.id}
                                            variants={childVariants}
                                            className='flex justify-start items-center gap-x-2 text-text-secondary hover:text-sky-400 cursor-pointer'>
                                            <div className='w-7 h-7 flex justify-center items-center shrink-0 rounded-full border border-border text-[0.8rem]'>
                                                {i + 1}
                                            </div>
                                            <p>{lesson.text}</p>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </AnimatePresence>
                    )
                }

            </motion.div>

        </ComponentWrapper>
    )
}
