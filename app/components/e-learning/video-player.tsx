'use client'

import { useState, type ReactNode } from 'react'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'motion/react'

export default function VideoPlayer({ video }: { video: string }): ReactNode {

    const [play, setPlay] = useState<boolean>(false)

    return (
        <div className={`absolute w-full h-full flex justify-center items-center z-20 ${play ? 'glass' : 'bg-transparent'} transition-color duration-300`}>
            <AnimatePresence mode='wait'>
                {
                    !play ? (
                        <PlayCircleIcon key={1} onClick={() => { setPlay(true) }} className='w-20 h-20 text-sky-400 glass rounded-full cursor-pointer' />
                    )
                        :
                        (
                            <motion.div
                                key={2}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0 }}
                                className='w-[720px] h-[480px] border border-sky-400 shadow-xl rounded-[25px] bg-black z-10 overflow-hidden'>
                                <video autoPlay muted loop controls src={video} className='w-full h-full'></video>
                            </motion.div>
                        )
                }
                {
                    play && <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                        onClick={() => { setPlay(false) }} className='absolute w-full h-full bg-black opacity-90 z-0'></motion.div>
                }
            </AnimatePresence>
        </div>
    )
}
