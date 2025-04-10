/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
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

export default function LessonsIndexClient({ theme }: { theme?: string }) {

    const [data, setData] = useState<LessonData[]>([])

    async function getLessons() {
        const { data } = await axios.get('http://localhost:4000/the-quest')
        setData(data)
    }

    useEffect(() => {
        if (data.length === 0) {
            getLessons()
        }
    }, [])

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <>
                {
                    data.length > 0 ? (
                        <>
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
                        </>
                    )
                        :
                        (
                            <div>loading</div>
                        )
                }
            </>
        </div>
    )
}
