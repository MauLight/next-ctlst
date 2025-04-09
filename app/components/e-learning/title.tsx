import { type ReactNode } from 'react'

export default function Title({ text }: { text: string }): ReactNode {
    return (
        <div className='flex justify-start py-10'>
            <p className='text-title leading-tight'>
                {
                    text
                }
            </p>
        </div>
    )
}
