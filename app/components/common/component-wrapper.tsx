import { type ReactNode } from 'react'

export default function ComponentWrapper({ children }: { children: ReactNode }): ReactNode {
    return (
        <div className='w-full max-w-[980px]'>
            {children}
        </div>
    )
}
