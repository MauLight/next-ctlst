import { type ReactNode } from 'react'

export default function Paragraph({ text }: { text: string }): ReactNode {
    return (
        <div className='w-full py-10'>
            <p className='text-paragraph'>
                {
                    text
                }
            </p>
        </div>
    )
}
