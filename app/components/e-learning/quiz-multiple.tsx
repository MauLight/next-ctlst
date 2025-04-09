'use client'

import { useState, type ReactNode } from 'react'
import ComponentWrapper from '../common/component-wrapper'

interface QuizWrittenProps {
    instructions: Array<string>
    choices: Array<string>
    answer: string
}

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i))

export default function QuizMultiple({ instructions, choices, answer }: QuizWrittenProps): ReactNode {

    const [userChoice, setUserChoice] = useState<string | null>(null)

    function handleUserChoice(answer: string) {
        setUserChoice(answer)
    }

    return (
        <ComponentWrapper>
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[500px] h-auto px-10 py-12 border border-sky-500 rounded-[25px] flex flex-col gap-y-15">
                    <div className='flex flex-col gap-y-5'>
                        <h1 className='text-[2.618rem] text-balance text-center'>Quiz</h1>

                        <div className='flex flex-col gap-y-3'>
                            {
                                instructions.map((elem, i) => (
                                    <p key={elem + '-' + i} className='text-[1rem] text-balance'>
                                        {elem}
                                    </p>
                                ))
                            }
                        </div>
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

                </div>
            </div>
        </ComponentWrapper>
    )
}
