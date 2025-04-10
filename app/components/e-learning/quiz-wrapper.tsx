'use client'

import { useState, type ReactNode } from 'react'
import QuizMultiple from './quiz-multiple'
import QuizWritten from './quiz-written'
import WrittenChallenge from './written-challenge'
import { AnimatePresence, motion } from 'motion/react'

export default function QuizWrapper(): ReactNode {

    const [step, setStep] = useState<number>(1)

    return (
        <div className='w-full h-screen flex items-center'>
            <AnimatePresence mode='wait'>

                {
                    step === 1 && (
                        <motion.div
                            key={1}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            exit={{ opacity: 0 }}
                            className="w-full flex justify-center">
                            <QuizWritten
                                callback={() => { setStep(2) }}
                                instructions={['Imply actions for the following two elements of the first example\'s conflict.', 'Faces wounded allies, and faces a foreign land.', 'Two for each of them.']}
                                numAnswers={4}
                            />
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
                            className="w-full flex justify-center">
                            <QuizMultiple
                                callback={() => { setStep(3) }}
                                answer='b'
                                instructions={['What is the definition of protagonist?']}
                                choices={['From the characters list, the one who holds the psychological journey of the story.', 'From the characters list, the one who holds the emotional journey of the story.', 'From the characters list, the one who holds the physical journey of the story.', 'All of the above.']}
                            />
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
                            <WrittenChallenge />
                        </motion.div>
                    )
                }

            </AnimatePresence>
        </div>
    )
}
