/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface SentenceHighlightsProps {
    text: string
    highlights: Array<string>
    bgImages: Array<Record<string, string | number>>
    length: number
    className?: string
}

export default function SentenceHighlights({ text, highlights, bgImages, length, className }: SentenceHighlightsProps) {

    const textArray = text.split(' ')
    const [style, setStyle] = useState<string | null>(null)

    useEffect(() => {
        if (length) {
            setStyle(`absolute w-full h-full top-0 left-0 grid grid-cols-${length} -z-10`)
        }
    }, [])

    return (
        <div className={`relative ${className} flex justify-center items-center overflow-hidden`}>

            <div className='w-full max-w-[908px]'>

                <div className='flex flex-wrap justify-center items-center z-10 text-[1.618rem] gap-x-2'>

                    {
                        textArray.map((word, i) => {
                            const highlight = highlights.find(elem => elem.toLowerCase() === word.toLowerCase())
                            if (highlight) return <b className='text-sky-400' key={`key-${word}-${i}`}>{word}</b>
                            else return <p key={`key-${word}-${i}`}>{word}</p>
                        })
                    }

                </div>

            </div>

            {
                style !== null && (
                    <div className={style}>
                        {
                            bgImages.map((image, i) => (

                                <Image key={`key-${image.id}-${i}-${length}`} className='col-span-1 object-cover w-full h-full opacity-18' src={image.img as string} width={1280} height={720} alt='bg' />

                            ))
                        }
                        {
                            Array.from({ length: 3 }).map((_, i) => (
                                <div key={i} className='absolute top-0 left-0 w-full h-full bg-radial from-transparent from-10% to-[#0a0a0a]'></div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}
