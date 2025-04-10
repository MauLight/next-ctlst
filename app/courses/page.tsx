import { type ReactNode } from 'react'
import CourseCard from '../components/e-learning/course-card'
import Title from '../components/e-learning/title'

export default function Page(): ReactNode {
    return (
        <div className='w-full min-h-screen flex flex-col gap-y-20 justify-center items-center pb-32'>
            <Title text='Courses' />
            <div className="grid grid-cols-3 gap-5">
                {
                    Array.from({ length: 9 }).map((_, i) => (
                        <div key={i}>
                            <CourseCard />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
