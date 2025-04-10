import { type ReactNode } from 'react'
import ComponentWrapper from '../common/component-wrapper'

interface QuizWrittenProps {
    instructions: Array<string>
    numAnswers: number
    callback: () => void
}

export default function QuizWritten({ instructions, numAnswers, callback }: QuizWrittenProps): ReactNode {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement
        const formData = new FormData(form)

        const answers = Array.from({ length: numAnswers }, (_, i) => formData.get(`Answer ${i + 1}`))
        const missingAnswers = answers.find((answer) => typeof answer === 'string' && answer === '')

        if (!missingAnswers && typeof missingAnswers !== 'string') {
            callback()
        }
    }

    return (
        <ComponentWrapper>
            <div className="w-full flex justify-center">
                <div className="w-full max-w-[500px] h-auto px-10 py-12 border border-sky-500 rounded-[25px] flex flex-col gap-y-5">
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

                    <form className='flex flex-col gap-y-5' onSubmit={handleSubmit}>
                        {
                            Array.from({ length: numAnswers }).map((_, i) => (
                                <div key={i} className='flex flex-col gap-y-1'>
                                    <label className='text-[0.9rem]' htmlFor={`Answer ${i + 1}`}>{`Answer ${i + 1}`}</label>
                                    <input id={`Answer ${i + 1}`} name={`Answer ${i + 1}`} type="text" className='w-full h-8 px-2 border border-sky-400 rounded-[6px] outline-0' />
                                </div>
                            ))
                        }

                        <button type="submit" className='ml-auto px-4 h-10 border rounded-[6px] mt-10'>Submit</button>
                    </form>
                </div>
            </div>
        </ComponentWrapper>
    )
}
