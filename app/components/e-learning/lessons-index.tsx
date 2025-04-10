import React from 'react'
import Dropdown from './dropdown'
import axios from 'axios'

export interface Lesson {
    id: string
    text: string
    completion: number
}

export interface LessonModule {
    number: number
    title: string
}

export interface LessonData {
    id: string
    module: LessonModule
    lessons: Lesson[]
}

export default async function LessonsIndex({ theme }: { theme?: string }) {

    const { data } = await axios.get('http://localhost:4000/the-quest')

    return (
        <div className='w-full flex flex-col gap-y-8'>
            {
                data.map((lesson: LessonData, i: number) => (
                    <Dropdown
                        key={`key-${lesson.id}-${i}`}
                        module={lesson.module.number}
                        title={lesson.module.title}
                        lessons={lesson.lessons}
                        theme={theme}
                    />
                ))
            }
        </div>
    )
}
