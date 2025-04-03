import { motion } from 'motion/react'
import React from 'react'

export default function EntranceAnimation({ display }: { display: boolean }) {
    return (
        <>
            {
                display && (
                    <motion.div
                        key={2}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        transition={{ duration: 0.05 }}
                        exit={{ opacity: 0 }}
                        className="absolute w-full border-b-[2px] border-sky-600 flex justify-center items-center"
                    >
                        <div className="absolute w-[30px] h-[30px] rounded-full bg-sky-600"></div>
                    </motion.div>
                )
            }
        </>
    )
}
