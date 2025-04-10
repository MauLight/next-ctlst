import Image from 'next/image'
import { type ReactNode } from 'react'
import CourseButton from './course-button'

export default function CourseCard(): ReactNode {
    return (

        <div className="relative w-[420px] h-[350px] flex flex-col justify-between bg-sky-500 text-black rounded-[25px] p-7">
            <small>Screenwriting</small>
            <div className='grid gap-y-2'>
                <h1 className='text-[2.618rem] font-bold'>The Quest</h1>
                <p className='w-3/4 text-balance'>Write your first draft in 2 months with the most powerful method you&apos;ve ever seen.</p>
            </div>
            <CourseButton />
            <Image className='absolute top-20 -right-55' src={'https://res.cloudinary.com/maulight/image/upload/v1744258039/qfvt7mulh7jncjusbrqw.png'} width={400} height={400} alt='image' />
        </div>
    )
}
