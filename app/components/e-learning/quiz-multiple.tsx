'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

import ComponentWrapper from '../common/component-wrapper'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from 'motion/react'

interface QuizWrittenProps {
    instructions: Array<string>
    choices: Array<string>
    answer: string
    callback?: () => void
}

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))

export default function QuizMultiple({ instructions, choices, answer, callback }: QuizWrittenProps): ReactNode {

    const [userChoice, setUserChoice] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(false)

    function handleUserChoice(answer: string) {
        setUserChoice(answer)
    }

    useEffect(() => {

        if (userChoice === answer && callback) {
            setTimeout(() => {
                setSuccess(true)
                setTimeout(() => {
                    callback()
                }, 2000)
            }, 1000)
        }
        if (userChoice === answer) {
            setTimeout(() => {
                setSuccess(true)
            }, 1000)
        }

    }, [userChoice, answer, callback])

    return (
        <ComponentWrapper>
            <div className="w-full flex justify-center">
                <div className={`w-full max-w-[500px] h-auto min-h-[500px] px-10 py-12 border ${success ? 'border-green-500' : 'border-sky-500'} transition-color duration-300 rounded-[25px]`}>
                    <motion.div
                        key={1}
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, }}
                        className='flex flex-col gap-y-10'
                    >
                        <div className='flex flex-col gap-y-5'>

                            <h1 className='text-quiz-title'>Quiz</h1>

                            <AnimatePresence mode='wait'>
                                {
                                    !success ? (
                                        <motion.div
                                            key={'question'}
                                            initial={{ opacity: 0, height: 34 * instructions.length }}
                                            animate={{ opacity: 1, height: 34 * instructions.length }}
                                            transition={{ duration: 0.5 }}
                                            exit={{ opacity: 0, height: 34 * 2 }}
                                            className='flex flex-col gap-y-3'>
                                            {
                                                instructions.map((elem, i) => (
                                                    <p key={elem + '-' + i} className='text-quiz-body pb-2'>
                                                        {elem}
                                                    </p>
                                                ))
                                            }
                                        </motion.div>
                                    )
                                        :
                                        (
                                            <motion.div
                                                key={'congratulations'}
                                                initial={{ opacity: 0, height: 34 * 2 }}
                                                animate={{ opacity: 1, height: 34 * 2 }}
                                                transition={{ duration: 0.5 }}
                                                exit={{ opacity: 0, }}
                                                className="flex items-center justify-center gap-x-5">
                                                <CheckCircleIcon className='w-10 h-10 text-green-500' />
                                                <h1 className='text-[1.618rem] text-balance text-center'>Congratulations!</h1>
                                            </motion.div>
                                        )
                                }
                            </AnimatePresence>
                        </div>

                        <div className='flex flex-col gap-y-5'>
                            {
                                choices.map((choice, i) => (
                                    <button onClick={() => { handleUserChoice(alphabet[i]) }} key={i} className={`group flex items-center gap-x-5 border ${userChoice ? alphabet[i] === answer && userChoice === alphabet[i] ? 'border-green-500 hover:border-green-400' : alphabet[i] !== answer && userChoice === alphabet[i] ? 'border-red-500' : 'hover:border-sky-400' : 'hover:border-sky-400'} rounded-l-full p-2 transition-color duration-300 cursor-pointer`}>

                                        <div className={`w-10 h-10 shrink-0 rounded-full border ${userChoice ? alphabet[i] === answer && userChoice === alphabet[i] ? 'border-green-500 hover:border-green-400' : alphabet[i] !== answer && userChoice === alphabet[i] ? 'border-red-500' : 'hover:border-sky-400' : 'hover:border-sky-400'} flex justify-center items-center transition-color duration-300`}>{alphabet[i].toUpperCase()}</div>

                                        <p className={`text-[0.8rem] text-balance ${userChoice ? alphabet[i] === answer && userChoice === alphabet[i] ? 'text-green-500 hover:text-green-400' : alphabet[i] !== answer && userChoice === alphabet[i] ? 'text-red-500' : 'group-hover:text-sky-400' : 'group-hover:text-sky-400'} transition-color duration-200`}>{choice}</p>

                                    </button>
                                ))
                            }
                        </div>
                    </motion.div>

                </div>
            </div >
        </ComponentWrapper >
    )
}
