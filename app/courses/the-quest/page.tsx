
import ComponentWrapper from '@/app/components/common/component-wrapper'
import LessonsIndex from '@/app/components/e-learning/lessons-index'
import { type ReactNode } from 'react'

export default function Page(): ReactNode {
    const upperPadding = 400 - (60 * 3)
    return (
        <div style={{ paddingTop: `${upperPadding}px` }} className='w-full min-h-[calc(100vh-60px)] flex flex-col justify-start items-center'>


            <ComponentWrapper>
                <LessonsIndex />
            </ComponentWrapper>

        </div>
    )
}
