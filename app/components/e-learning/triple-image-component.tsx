'use client'

import Image from 'next/image'
import { type ReactNode } from 'react'
import { motion } from 'motion/react'

const images = [
    {
        text1: 'Sand',
        id: 'a1',
        image: 'https://images.unsplash.com/photo-1740004731264-3cde5c198cc2'
    },
    {
        text1: 'Mountain',
        id: 'b2',
        image: 'https://images.unsplash.com/photo-1734630630491-458df4f38213'
    },
    {
        text1: 'Water',
        id: 'c3',
        image: 'https://images.unsplash.com/photo-1738694114013-4a92b1851d3b'
    },
]

const containerVariants = {
    initial: {},
    hover: {}
}

const childVariants = {
    initial: { opacity: 0 },
    hover: {
        opacity: 0.8,
        transition: { duration: 1.5 }
    }
}

export default function TripleImageComponent(): ReactNode {
    return (
        <>

            <div className='w-full h-[400px] grid grid-cols-3 gap-x-10'>
                {
                    images.map((image, i) => (
                        <motion.div
                            variants={containerVariants}
                            initial='initial'
                            whileHover='hover'
                            key={image.id + '-' + i}
                            className='relative rounded-[25px] overflow-hidden h-full cursor-progress'
                        >
                            <Image className='h-full rounded-[25px]' src={image.image} width={980 / 3} height={600} alt='image' />
                            <div className='absolute top-0 left-0 bg-radial from-transparent from-5% to-black to-85% w-full h-full opacity-30 z-10'></div>
                            <motion.div
                                key={'bg'}
                                variants={childVariants}
                                className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black z-20'>
                                <motion.p
                                    variants={childVariants}
                                >{image.text1}</motion.p>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}
