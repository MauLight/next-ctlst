'use client'

import { motion } from "motion/react"

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            duration: 1,
            staggerChildren: 1
        }
    }
}

const childrenVariants = {
    initial: {
        opacity: 0,
        scale: 1.5
    },
    animate: {
        opacity: 1,
        scale: 1
    }
}

export default function BulletDefinitions({ definitions }: { definitions: Array<Record<string, string>> }) {
    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            animate='animate'
            className="flex flex-col justify-center gap-y-20"
        >
            {
                definitions.map((def, i) => (
                    <motion.div
                        key={`key-${def.id}-${i}-1`}
                        variants={childrenVariants}
                        className="w-full max-w-[980px]"
                    >
                        <div className="w-full h-full">
                            <div className='flex gap-x-10 items-start'>
                                <h2 className='text-bullet-title'>{def.title}</h2>
                                <motion.p className='text-bullet-definition'>{def.def}</motion.p>
                            </div>
                        </div>


                    </motion.div>
                ))
            }
        </motion.div>
    )
}
