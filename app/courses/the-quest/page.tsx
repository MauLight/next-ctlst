
import ComponentWrapper from '@/app/components/common/component-wrapper'
import Dropdown from '@/app/components/e-learning/dropdown'
import { type ReactNode } from 'react'


const lessons1 = [
    {
        id: 'a1',
        text: 'What is a screenwriter?',
        completion: 90,
        url: '/lesson-1'
    },
    {
        id: 'b2',
        text: 'About the movie industry.',
        completion: 90,
        url: '/lesson-1'
    },
    {
        id: 'c3',
        text: 'Is this course for you?',
        completion: 90,
        url: '/lesson-1'
    },
]
const lessons2 = [
    {
        id: 'a1',
        text: 'What is a screenwriter?',
        completion: 90,
        url: '/lesson-1'
    },
    {
        id: 'b2',
        text: 'About the movie industry.',
        completion: 90,
        url: '/lesson-1'
    },
    {
        id: 'c3',
        text: 'Is this course for you?',
        completion: 90,
        url: '/lesson-1'
    },
]
const lessons3 = [
    {
        id: 'a1',
        text: 'What is a screenwriter?',
        completion: 90,
        url: '/lesson-1'
    },
    {
        id: 'b2',
        text: 'About the movie industry.',
        completion: 90,
        url: '/lesson-1'
    },
    {
        id: 'c3',
        text: 'Is this course for you?',
        completion: 90,
        url: '/lesson-1'
    },
]

export default function Page(): ReactNode {
    const upperPadding = 400 - (60 * 3)
    return (
        <div style={{ paddingTop: `${upperPadding}px` }} className='w-full min-h-[calc(100vh-60px)] flex flex-col justify-start items-center'>


            <ComponentWrapper>
                <div className='w-full flex flex-col gap-y-8'>
                    <Dropdown module={1} title='Course Introduction' lessons={lessons1} />
                    <Dropdown module={2} title='The Basics of Story' lessons={lessons2} />
                    <Dropdown module={3} title='Course Introduction' lessons={lessons3} />
                </div>
            </ComponentWrapper>

        </div>
    )
}
