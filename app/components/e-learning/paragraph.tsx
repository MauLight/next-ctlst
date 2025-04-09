import { type ReactNode } from 'react'

export default function Paragraph({ text, padding }: { text: string, padding?: string }): ReactNode {
    return (
        <div className={`w-full ${padding ? padding : 'py-10'}`}>
            <p className='text-paragraph'>
                {
                    text
                }
            </p>
        </div>
    )
}
