'use client'

import Image from 'next/image'
import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { Switch } from '../common/switch'

interface TripleImageProps { showSwitch?: boolean, images: Array<Record<string, string>> }

const containerVariants = {
    initial: {},
    hover: {}
}

const childVariants = {
    initial: { opacity: 0 },
    hover: {
        opacity: 0.8,
        transition: { duration: 1.2 }
    }
}

export default function TripleImageComponent({ images, showSwitch }: TripleImageProps): ReactNode {

    const [clicked, setClicked] = useState<boolean>(false)

    return (
        <>
            {
                showSwitch && (
                    <div className="w-full h-[100px] flex justify-center items-start gap-x-5">
                        <p>Concrete</p>
                        <Switch clicked={clicked} handleClick={() => { setClicked(!clicked) }} />
                        <p>Abstract</p>
                    </div>
                )
            }
            <div className='w-full h-[400px] grid grid-cols-3 gap-x-10'>
                {
                    images.map((image, i) => (
                        <motion.div
                            variants={containerVariants}
                            initial='initial'
                            whileHover='hover'
                            key={image.id + '-' + i}
                            className='relative rounded-[25px] overflow-hidden h-full cursor-pointer'
                        >
                            <Image className='h-full rounded-[25px]' src={image.image} width={980 / 3} height={600} alt='image' />
                            <div className='absolute top-0 left-0 bg-radial from-transparent from-5% to-black to-85% w-full h-full opacity-30 z-10'></div>
                            <motion.div
                                key={'bg'}
                                variants={childVariants}
                                className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black z-20'>
                                <motion.p
                                    variants={childVariants}
                                >{clicked ? image.text2 : image.text1}</motion.p>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}
