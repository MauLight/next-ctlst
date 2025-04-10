import { type ReactNode } from 'react'
import VideoPlayer from './video-player'

export default function LessonTitle(): ReactNode {
    return (
        <div className="relative w-full flex justify-center">
            <div className='w-full max-w-[980px] h-screen flex flex-col justify-center gap-y-10 z-10 pb-10'>
                <p className='text-[1.618rem] text-sky-400 uppercase'>Lesson 1</p>
                <h1 className='text-[17.942rem] leading-65 tracking-tight'>What is a story?</h1>
            </div>

            <video autoPlay muted loop src='lesson1.webm' className='absolute top-0 left-0 w-full h-full object-cover opacity-30' />
            {
                Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className='absolute top-0 left-0 w-full h-full bg-radial from-transparent from-10% to-[#0a0a0a]'></div>
                ))
            }

            <VideoPlayer />
        </div>
    )
}
