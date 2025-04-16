import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { type ReactNode } from 'react'

export default function ComparisonComponent({ word, image, labels, reverse, size }: { word: string, image: string, labels: Array<string>, reverse?: boolean, size?: Array<number> }): ReactNode {

    console.log(size)

    const width = size ? size[0] : 463
    const height = size ? size[1] : 528

    return (
        <div className='w-full max-w-[980px] flex flex-col gap-y-20'>

            <div className='flex flex-col gap-y-10'>

                <div className="flex justify-between items-center">
                    {
                        reverse ? (
                            <>
                                <Image className={``} width={width} height={height} alt='comparison' src={image} />
                                <ArrowLongRightIcon className='w-20 h-20' />
                                <h2 className='text-[4.236rem] text-sky-400 capitalize'>{word}</h2>
                            </>
                        )
                            :
                            (
                                <>
                                    <h2 className='text-[4.236rem] text-sky-400 capitalize'>{word}</h2>
                                    <ArrowLongRightIcon className='w-20 h-20' />
                                    <Image className='' width={width} height={height} alt='comparison' src={image} />
                                </>
                            )
                    }
                </div>
                <div className="flex justify-between items-center px-10 capitalize">
                    {
                        labels.map((label, i) => (
                            <p key={i + '-' + label}>{label}</p>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
