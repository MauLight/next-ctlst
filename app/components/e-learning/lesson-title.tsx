import { type ReactNode } from 'react'
import VideoPlayer from './video-player'

interface LessonTitleProps {
    title: string
    lesson: string
    bgVideo: string
}

export default function LessonTitle({ title, lesson, bgVideo }: LessonTitleProps): ReactNode {
    return (
        <div className="relative w-full flex justify-center">
            <div className='w-full max-w-[980px] h-screen flex flex-col justify-center gap-y-10 z-10 pb-10'>
                <p className='text-[1.618rem] text-sky-400 capitalize'>{lesson}</p>
                <h1 className='text-[17.942rem] leading-65 tracking-tight'>{title}</h1>
            </div>

            <video autoPlay muted loop src={bgVideo} className='absolute top-0 left-0 w-full h-full object-cover opacity-30' />
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className='absolute top-0 left-0 w-full h-full bg-radial from-transparent from-10% to-[#0a0a0a]'></div>
                ))
            }

            <VideoPlayer video={bgVideo} />
        </div>
    )
}
