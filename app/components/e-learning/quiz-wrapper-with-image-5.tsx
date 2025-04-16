'use client'

import { useState, type ReactNode } from 'react'
import WrittenChallenge from './written-challenge'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'

export default function QuizWrapperImage5(): ReactNode {

    const [step, setStep] = useState<number>(1)

    return (
        <div className='w-full h-auto py-20 grid grid-cols-2'>
            <div className="col-span-1 flex justify-end items-center min-h-[650px]">
                <AnimatePresence mode='wait'>
                    {
                        step === 1 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                key={1}
                                className="relative rounded-[25px] overflow-hidden">
                                <Image src='https://film-grab.com/wp-content/uploads/2019/02/ballast001.jpg' width={720} height={480} alt='example' />
                                <div className='absolute top-0 left-0 bg-radial from-transparent from-5% to-black to-85% w-full h-full opacity-30 z-10'></div>
                            </motion.div>
                        )
                            :
                            (
                                <motion.div
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                    key={2}
                                    className="relative rounded-[25px] overflow-hidden">
                                    <Image src='https://film-grab.com/wp-content/uploads/2014/10/61-160.jpg' width={720} height={480} alt='example' />
                                    <div className='absolute top-0 left-0 bg-radial from-transparent from-5% to-black to-85% w-full h-full opacity-30 z-10'></div>
                                </motion.div>
                            )
                    }
                </AnimatePresence>
            </div>
            <div className="col-span-1 flex justify-start items-center min-h-[650px]">
                <AnimatePresence mode='wait'>

                    {
                        step === 1 && (
                            <motion.div
                                key={1}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0 }}
                                className="w-full pl-10 pr-20 flex justify-center">
                                <WrittenChallenge title='Challenge' instructions={['Take a moment to reflect upon this image, think about what symbol might be refering to.', 'You have it? Great, now tell me what symbol comes to mind and then write a scene that symbolizes your answer.']} noBorder callback={() => { setStep(2) }} />
                            </motion.div>
                        )
                    }
                    {
                        step === 2 && (
                            <motion.div
                                key={2}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0 }}
                                className="w-full pl-10 pr-20 flex justify-center">
                                <WrittenChallenge title='Challenge' instructions={['Ready to go again?', 'Tell me what symbol comes to mind and then write a scene that symbolizes your answer.']} noBorder callback={() => { setStep(3) }} />
                            </motion.div>
                        )
                    }
                    {
                        step === 3 && (
                            <motion.div
                                key={3}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                exit={{ opacity: 0 }}
                                className="w-full flex justify-center">
                                <div className='w-full h-[300px] flex flex-col justify-center items-center rounded-[25px]'>
                                    <h1 className='text-[2.618rem] text-balance text-center text-sky-500'>Great Job!</h1>
                                    <button className='px-4 h-10 border border-sky-500 text-sky-500 rounded-[6px] mt-5'>Continue</button>
                                </div>
                            </motion.div>
                        )
                    }

                </AnimatePresence>
            </div>
        </div>
    )
}
